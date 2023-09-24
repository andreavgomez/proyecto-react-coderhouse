import { useState, useEffect } from 'react'
// import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from "../../firebase/client";
import { getDocs, collection, query, where } from 'firebase/firestore';



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {

    setLoading(true)

    const collectionRef = categoryId
        ? query(collection(db, 'products'), where ('category','==', categoryId))
        : collection(db, 'products')
      
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error =>{
              console.log(error)
            })
            .finally(() => {
              setLoading(false)
            })

      ////
    // const asyncFunc = categoryId ? getProductsByCategory : getProducts

    // asyncFunc(categoryId)
    //   .then(response => {
    //     setProducts(response)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })

  }, [categoryId])

  return (
    <div>
      <h1>{greeting}</h1>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ItemListContainer
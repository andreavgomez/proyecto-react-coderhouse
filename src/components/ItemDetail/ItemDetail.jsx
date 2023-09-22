import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({ autor, titulo, precio, imagen, category, stock, id }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, titulo, precio
        }

        addItem(item, quantity)        
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {titulo}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={titulo} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>
            <footer className="ItemFooter">
                {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} /> */}
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            


            </footer>
        </article>
    )
}

export default ItemDetail

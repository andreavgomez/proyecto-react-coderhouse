import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from "../../firebase/client";
import { getDoc, doc, Timestamp } from 'firebase/firestore';

import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useState(CartContext)

    const createOrder = async ({ name, phone, email }) => {     
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFormFirestore = await getDocs(query(productsRef,where(documentId(),'in',i)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart =cart.find (prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
                
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })                    
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()
                const ordeRef = collection(db, 'orders')
                const orderadded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            }else {
                console.error('hay productos que no tienen stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }            
    }

    if (loading) {
        return <h1>Se esta procesando su orden ... </h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return  (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm= {createOrder} />
        </div>
    )

}

export default Checkout 
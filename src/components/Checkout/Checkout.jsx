import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/client';
import { Timestamp, collection, addDoc, writeBatch, query, where, getDocs, documentId } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { orderId } = useParams();
  const [loading, setLoading] = useState(false);

  const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.precio * item.quantity;
    });
    return total;
  };

  const createOrder = async (userData) => {
    setLoading(true);

    try {
      const total = calculateTotal();

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, 'products');
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), 'in', ids))
      );
      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, {
          buyer: userData,
          items: cart,
          total: total,
          date: Timestamp.fromDate(new Date()),
        });
        clearCart();
        return orderAdded.id;
      } else {
        console.error('Hay productos que no tienen stock');
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está procesando su orden ... </h1>;
  }

  if (orderId) {
    return <h1>El ID de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;

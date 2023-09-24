import './Cart.css'
import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, clearCart, totalQuantity, removeItem } = useContext(CartContext);

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.precio * item.quantity;
        });
        return total;
    };

    if (totalQuantity === 0) {
        return (
            <div className="Cart">
                <h1 className="NoItems">No hay items en el carrito</h1>
                <Link to='/' className='ProductLink'>Productos</Link>
            </div>
        );
    }

    return (
        <div className="Cart">
            {cart.map(p => (
                <CartItem
                    key={p.id}
                    id={p.id}
                    titulo={p.titulo}
                    precio={p.precio}
                    cantidad={p.quantity}
                    onRemove={removeItem}
                />
            ))}
            <div className="Total">
                <button onClick={() => clearCart()} className="Button">Vaciar Carrito</button>
                <Link to='/checkout' className='CheckoutLink'>Checkout</Link>                
                <h3>Total: ${calculateTotal()}</h3>
            </div>
        </div>
    );
};

export default Cart;

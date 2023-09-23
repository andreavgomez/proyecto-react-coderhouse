import React from 'react';
import './CartItem.css'; 

const CartItem = ({ id, titulo, precio, cantidad }) => {
  const subtotal = precio * cantidad;

  return (
    <div className="CartItem">
      <div className="CartItem-info">
        <h3 className="CartItem-title">{titulo}</h3>
        <p className="CartItem-quantity">Cantidad: {cantidad}</p>
        <p className="CartItem-price">Precio: ${precio}</p>
        <p className="CartItem-subtotal">Subtotal: ${subtotal}</p>
      </div>
      <div className="CartItem-delete">
        <button className="btn btn-danger">Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;

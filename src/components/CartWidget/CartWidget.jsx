import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    console.log('totalQuantity', totalQuantity)

    return (
        // <nav>
        //     <div>
        //         <i className="bi bi-cart fs-3"></i>
        //         { totalQuantity }
        //     </div>
        // </nav>
        <Link to='/cart' className='navbar-brand CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <i className="bi bi-cart fs-3" alt='cart-widget'></i>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget
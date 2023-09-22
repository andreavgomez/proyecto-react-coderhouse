import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)    

    return (
        // <nav>
        //     <div>
        //         <i className="bi bi-cart fs-3"></i>
        //         1
        //     </div>
        // </nav>
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <i className="bi bi-cart fs-3" alt='cart-wdiget'></i>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget
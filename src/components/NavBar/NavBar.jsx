import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/js/dist/dropdown';
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className="navbar navbar-dark bg-primary shadow rounded justify-content-between flex-nowrap flex-row fixed-top">
            <div className="container position-relative">                
                <a className="navbar-brand float-left" href="/">
                    Libreria El arte de Leer
                </a>                
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Libros
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><NavLink to={`/category/Infantiles`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Infantiles</NavLink></li>
                            <li><NavLink to={`/category/Novelas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Novelas</NavLink></li>
                            <li><NavLink to={`/category/Ficcion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ficcion</NavLink></li>
                        </ul>
                    </li>                    
                </ul>          
                <CartWidget />
            </div>
        </nav >
    )
}

export default NavBar;

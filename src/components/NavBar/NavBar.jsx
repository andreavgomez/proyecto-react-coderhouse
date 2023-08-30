import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/js/dist/dropdown';
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {

    return (
        // <nav className="NavBar" >
        //     <Link to='/'>
        //         <h3>Libreria El arte de Leer</h3>
        //     </Link>
        //     <div className='Categories'>
        //         <NavLink to={`/category/Libros infantiles`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Infantiles</NavLink>
        //         <NavLink to={`/category/Libros novelas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Novelas</NavLink>
        //         <NavLink to={`/category/Libros ficcion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ficcion</NavLink>               
        //     </div>
        //     <CartWidget />
        // </nav>
        <nav className="navbar navbar-dark bg-primary shadow rounded justify-content-between flex-nowrap flex-row fixed-top">
            {/* <div className="container position-relative"> */}
                <Link to='/'>
                    <h3>Libreria El arte de Leer</h3>
                </Link>
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
            {/* </div> */}
        </nav >

        // <nav className="navbar navbar-dark bg-primary shadow rounded justify-content-between flex-nowrap flex-row fixed-top">
        //     <div className="container position-relative">
        //         <a className="navbar-brand float-left" href="/">
        //             Libreria El arte de Leer
        //         </a>
        // <ul className="navbar-nav">
        //     <li className="nav-item dropdown">
        //         <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //             Libros
        //         </a>
        //         <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //             <li><a className="dropdown-item" href="/">Libros infantiles</a></li>
        //             <li><a className="dropdown-item" href="/">Libros novelas</a></li>
        //             <li><a className="dropdown-item" href="/">Libros ficcion</a></li>
        //         </ul>
        //     </li>
        // </ul>
        // <CartWidget />
        //     </div>
        // </nav>
    )
}

export default NavBar;

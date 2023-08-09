import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/js/dist/dropdown';

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
                            <li><a className="dropdown-item" href="/">Libros infantiles</a></li>
                            <li><a className="dropdown-item" href="/">Libros novelas</a></li>
                            <li><a className="dropdown-item" href="/">Libros ficcion</a></li>
                        </ul>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;

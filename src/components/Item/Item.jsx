import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ autor, titulo, precio, imagen, category, stock, id }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {titulo}
                </h2>
            </header>
            <picture>
                {/* <img src={imagen} alt={titulo} className="ItemImg" /> */}
                <img src={require(`../../assets/${imagen}`).default} alt={titulo} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item
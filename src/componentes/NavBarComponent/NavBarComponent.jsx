import 'bootstrap/dist/js/bootstrap.min.js'
import './NavBarComponent.css'
import logo from './NavBarLogo.png'
import CartWidgetContainer from '../CartWidgetContainer/CartWidgetContainer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const burgerbar = <FontAwesomeIcon icon={faBars} />;
const NavBarComponent = () => {

    return (
        <nav className="nav-bar">
            <div className="logo">
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
            </div>
            {burgerbar}
            <ul>
                <li>  <Link to={'/'}>Inicio</Link></li>
                <li>  <Link to={'/tienda'}>Tienda</Link></li>
                {/* <li className="dropdown">
                    <a className="dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Categorias
                    </a>
                    <div className="dropdown-menu bg" aria-labelledby="navbarDropdown">
                        <Link to={'/category/producto.category'}> Categoria </Link>
                        <a className="dropdown-item" href="./videos.html">Videos</a>
                    </div>
                </li> */}
                <li id="logout"> <Link to={'/logout'}> Log-Out</Link></li>
            </ul>

            <CartWidgetContainer />

        </nav>
    );
}

export default NavBarComponent
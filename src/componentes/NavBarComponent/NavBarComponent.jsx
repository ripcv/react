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
            </ul>

            <CartWidgetContainer />

        </nav>
    );
}

export default NavBarComponent
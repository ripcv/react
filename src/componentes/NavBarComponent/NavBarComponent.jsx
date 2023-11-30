import 'bootstrap/dist/js/bootstrap.min.js'
import './NavBarComponent.css'
import logo from './NavBarLogo.png'
import CartWidgetContainer from '../CartWidgetContainer/CartWidgetContainer';

const NavBarComponent = () => {

    return (
        <nav className="nav-bar">
            <div className="logo">
                <a href="../index.html">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <i className="fa-solid fa-bars"></i>
            <ul>
                <li> <a href="../index.html">Inicio</a></li>
                <li> <a href="./conciertos.html">Conciertos</a></li>
                <li> <a href="./discografia.html">Discografia</a></li>
               <li className="dropdown">
                  <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      Multimedia
                  </a>
                  <div className="dropdown-menu bg" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="./galeria.html">Galeria</a>
                      <a className="dropdown-item" href="./videos.html">Videos</a>
                  </div>
              </li>
                <li> <a href="./tienda.html">Tienda</a></li>
                <li id="logout"> <a href="#" id="logout-link">Log-Out</a></li>
            </ul>

            <CartWidgetContainer />

        </nav>
    );
}

export default NavBarComponent
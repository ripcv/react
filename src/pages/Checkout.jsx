
import ProductsCarContainer from '../componentes/ProductsCarContainer/ProductsCarContainer'
import './Checkout.css'


const Checkout = () => {

    return (
        <div className="checkout-page">
        <h1 className="titulo__formato">Carrito de Compras</h1>
        <section className="contenido contenido-carrito">
        <form action="" className="formFinalizarCompra">
            <div className="datos-comprador" id="datos-comprador">
                <h3>Datos Comprador</h3>
                <label htmlFor="nombreUsuario">Nombre</label>
                <input type="text" className="input-text" name="nombreUsuario" id="nombreUsuario"/>
                <label htmlFor="direccionUsuario">Direccion Envio</label>
                <input type="text" className="input-text" name="direccionUsuario" id="direccionUsuario" placeholder="Ingresa la direccion"/>
                <label htmlFor="correoUsuario">Correo</label>
                <input type="text" className="input-text" name="correoUsuario" id="correoUsuario"/>
                <label htmlFor="telefonoContacto">Telefono</label>
                <input type="text" className="input-text" name="telefonoContacto" id="telefonoContacto"/>
          
            </div>

        <ProductsCarContainer/>
        </form>
        </section>
        </div>
    )
}

export default Checkout
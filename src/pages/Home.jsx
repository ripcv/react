import './Home.css'
import { Link } from 'react-router-dom';

/**
 * @description Se renderiza pagina de inicio.
 */
function Home() {


  return (
    <div>
    <header className="header">
        <div id="carouselExampleDark" className="carousel carousel-dark slide slider ocultar" data-bs-ride="carousel">
            <div className="carousel-indicators ocultar">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner slider">
              <div className="carousel-item active" data-bs-interval="10000">
              <img src="../../src/assets/images/slider/slider.png" className="d-block w-100" alt="Stoner"/> 
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="titulo__formato">STONER/ROCK FROM CONCEPCION</h1>
                  <p>Since 2017.</p>
                </div>
              </div>
               <div className="carousel-item" data-bs-interval="2000">
               <img src="../../src/assets/images/slider/slider1.png" className="d-block w-100" alt="Nuevo Single"/>
                <div className="carousel-caption d-none d-md-block">
                  <h2>Normandia</h2>
                  <p>Escucha nuestro nuevo Single.</p>
                </div>
              </div>
              <div className="carousel-item">
                <Link to='/tienda'>
                <img src="../../src/assets/images/slider/slider2.png"className="d-block w-100" alt="Merch"/></Link>
                <div className="carousel-caption d-none d-md-block">
                  <h2>Nuevo Merchandising</h2>
                  <p> </p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev ocultar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next ocultar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
          </div>
    </header>
    <main className="main">
        <section className="contenido">
            <div className="novedades" data-aos="zoom-in">

                <h2 className="titulo__formato">¡Nuevo Single y Gira Nacional!</h2>
                <p>¡Hola, fanáticos del rock en Concepción y más allá! Es con gran emoción y energía que compartimos esta noticia exclusiva.
                    Después de largas horas de arduo trabajo en el estudio y dejando el alma en cada acorde, estamos orgullosos de anunciar que "Normandia" esta lista para ser escuchado. Este sencillo es un viaje sónico que combina nuestros característicos riffs pesados con atmósferas psicodélicas que te llevarán a un viaje alucinante a través de vastos paisajes sonoros.
                    ¡Pero espera, aún hay más! Nos embarcaremos en una gira nacional que nos llevará a los escenarios de Concepción, Santiago, Valparaíso, Antofagasta y más. Queremos compartir toda nuestra pasión y poder en cada ciudad, y estamos ansiosos de sentir la energía de nuestra fiel audiencia en cada concierto.
                     Sigue nuestras redes sociales para obtener actualizaciones, detalles y sorpresas adicionales. ¡Juntos haremos que este viaje al desierto sónico sea legendario!
                    ¡Nos vemos en el escenario!
                    <span>La Grande Arme</span></p>
            </div>
    
        </section>
        
    </main>
    </div>
  )
}

export default Home
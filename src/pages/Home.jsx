import './Home.css'
import { useGetProducts } from "../hooks/useProducts"
import { Link } from 'react-router-dom';


function Home() {

  const { productsData } = useGetProducts();

  return (
    <div>
    <header class="header">
        <div id="carouselExampleDark" class="carousel carousel-dark slide slider ocultar" data-bs-ride="carousel">
            <div class="carousel-indicators ocultar">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner slider">
              <div class="carousel-item active" data-bs-interval="10000">
              <img src="../../src/assets/images/slider/slider.png" class="d-block w-100" alt="Stoner"/> 
                <div class="carousel-caption d-none d-md-block">
                  <h1 class="titulo__formato">STONER/ROCK FROM CONCEPCION</h1>
                  <p>Since 2017.</p>
                </div>
              </div>
               <div class="carousel-item" data-bs-interval="2000">
               <img src="../../src/assets/images/slider/slider1.png" class="d-block w-100" alt="Nuevo Single"/>
                <div class="carousel-caption d-none d-md-block">
                  <h2>Normandia</h2>
                  <p>Escucha nuestro nuevo Single.</p>
                </div>
              </div>
              <div class="carousel-item">
                <Link to='/tienda'>
                <img src="../../src/assets/images/slider/slider2.png"class="d-block w-100" alt="Merch"/></Link>
                <div class="carousel-caption d-none d-md-block">
                  <h2>Nuevo Merchandising</h2>
                  <p> </p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev ocultar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next ocultar" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
          </div>
    </header>
    <main class="main">
        <section class="contenido">
            <div class="novedades" data-aos="zoom-in">

                <h2 class="titulo__formato">¡Nuevo Single y Gira Nacional!</h2>
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
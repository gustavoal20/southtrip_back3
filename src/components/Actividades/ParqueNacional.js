import React from "react";
import './Actividades.css';
import parque from './Imagenes/parque.jpg'
import { Card, ListGroup,} from "react-bootstrap";
import {FcCheckmark } from "react-icons/fc";
//import ubicacion from './Imagenes/ubicacion.jpeg'
import BtnFlotante from "../Btn-flotante/BtnFlotante";



const Actividades = () => {

    return (

    <div className="Parque">

      <BtnFlotante/>
          <div className="parque">
          <img src={parque}  alt=""/>
          </div>   

            <br/>
            <br/>
            
          <div className="card__presios">
            <Card className="card1" style={{ width: '18rem' }}>
                <Card.Header >USD $50</Card.Header>
                <ListGroup variant="flush">                 
                    <ListGroup.Item>Fecha</ListGroup.Item>
                    <ListGroup.Item>Adultos</ListGroup.Item>
                    {/* <ListGroup.Item ><Button className="botonacts" href="/Confirmar" variant="warning" type="submit">
            reservar </Button></ListGroup.Item> */}
                </ListGroup>
            </Card>
          </div>

          <div className="caminata"> 
          <h3>PARQUE NACIONAL TIERRA DEL FUEGO (INVIERNO)</h3>
       </div>
       <br/>
      <div className="lineacami">
            <hr/>
      </div> 
      <div className="descripcion"><h3>DESCRIPCION</h3></div>

      <div className="caminata2"> 
      <br/>
      <p>La primera parada es la Estación del Tren del Fin del Mundo, ferrocarril en funcionamiento más austral del planeta. Este pintoresco tren que parece de juguete conecta La Estación con el Parque Nacional,
         haciendo una parada en la Cascada La Macarena. Luego recorremos distintos puntos panorámicos del Parque, algunos de imposible acceso con otros medios de transporte. El Lago Acigami de incomparable belleza y la famosa Bahía Lapataia, donde pueden observarse castoreras y turbales, entre otros. </p>
      <p>A diferencia de otros parques nacionales del país, posee la particularidad de integrar paisajes de costa marítima, bosque, lagos, ríos y montaña. En su extensión encontramos una síntesis de la riqueza biológica de la Isla de Tierra del Fuego y de sus hermosos paisajes.
         Volveremos a la ciudad  de Ushuaia con el tiempo suficiente como para combinar el día con una navegación por el Canal de Beagle por la tarde.</p>
         <br/>
         <p>Disponible en temporada de INVIERNO (1° de Junio – 30 de Septiembre). Esta excursión puede sufrir variantes por motivos climáticos.</p>
         <p>Tenes un 10% de descuento contratando esta excursión y navegación canal de beagle.</p>
         <br/>
         <h5>Incluye:</h5>
      
       <p><FcCheckmark/> Idioma: Español/Inglés.</p>
       <p><FcCheckmark/> Refrigerio. </p> 
        <br/>
      </div>
      <hr className="linea"/> 
        <br/>
      <div className="caminata3"> 
          <h3>CRONOGRAMA</h3>
      </div>
      <div className="descripcion__caminate3">
        <br/>
        <p><FcCheckmark/> 9:00	Salida</p>
        <p><FcCheckmark/> 10:00	Llegada a Tren del Fin del Mundo</p>
        <p><FcCheckmark/> 11:00	Fin de recorrido de Tren</p>
        <p><FcCheckmark/> 11:30	Llegada a Bahía Lapataia y caminata</p>
        <p><FcCheckmark/> 12:30	Arribo a Lago Acigami y refrigerio</p>
        <p><FcCheckmark/> 13:30	Vuelta a Ushuaia</p>
        <p>Servicios en regular y en privado. Mínimo 2 personas.</p>
        </div>
      <br/>
      <div className="linea">
         <hr/>
      </div>









      <div className="card__presios">
            <Card className="card1" style={{ width: '18rem' }}>
                <Card.Header >USD $50</Card.Header>
                <ListGroup variant="flush">                 
                    <ListGroup.Item>Fecha</ListGroup.Item>
                    <ListGroup.Item>Adultos</ListGroup.Item>
                    {/* <ListGroup.Item ><Button className="botonacts" href="/Confirmar" variant="warning" type="submit">
            reservar </Button></ListGroup.Item> */}
                </ListGroup>
            </Card>
          </div>


          <div className="caminata"> 
          <h3>PARQUE NACIONAL TIERRA DEL FUEGO (VERANO)</h3>
          <h6>No incluye ticket de tren ni ticket de parque nacional</h6>
          </div> 

          <div className="lineacami">
            <hr/>
          </div> 

      <div className="info__container">
      <div className="informacion__travesia">
          <div className="iconos"><p> Duración: </p><p> 4hs</p> </div>
          <div className="iconos2"><p> Cancelacion:</p> <p>no se cansela</p></div>
          <div className="iconos3"><p> Maxi de personas:</p> <p> 18 </p></div>
      </div>
        
          <br/>
        </div>
  
          <div className="lineacami">
         <hr/>
         <br/>
         </div> 
          <div className="descripcion"><h3>DESCRIPCION</h3></div>

          <div className="caminata2"> 
          
          <br/>
          <p>Saliendo desde el hotel, nos dirigimos con dirección oeste donde se encuentra ubicado el Parque Nacional Tierra del Fuego.</p>

          <p>Este Parque fue creado en el año 1960 y representa el área natural protegida más austral de la República Argentina, abarcando una franja de 6 kilómetros sobre al Canal Beagle y un total de 70.000 hectáreas.</p>

          <p>Durante el recorrido realizaremos un trekking de una hora para luego vitar  el Lago Acigami o Roca, Bahía Lapataia, entre otros, teniendo la posibilidad de conocer las especies de bosques subantárticos que el Parque Nacional preserva, donde conviven zorros colorados, guanacos, conejos, castores y cóndores.</p>

          <p>También se obtienen vistas panorámicas del Canal Beagle y de sus islas montañosas.</p>

          <p>En Bahía Lapataia, se pueden observar numerosas aves marinas y restos de un conchero utilizado por los primero aborígenes Yaganes.</p>

        <br/>
        <p>Tenes un 10% de descuento contratando esta excursión y navegación canal de beagle.</p>
        <br/>
         </div>
        
        <hr className="linea"/> 
        <br/>
        <div className="caminata3"> 
          <h3>CRONOGRAMA</h3>
        </div>

        <div className="descripcion__caminate3">
          <br/>
          <p><FcCheckmark/>Salida: 08:00 hs aproximadamente</p>         
          <p><FcCheckmark/> Tarifa: AR$ 6000</p>
          <p><FcCheckmark/> Política de menores: de 3 a 11 años: 50 % descuento</p>
          <p><FcCheckmark/> Vigencia: del 01/01/22 al 30/06/22</p>
          <br/>
        </div>
       <div className="linea">
         <hr/>
       </div>
       

    

       <div className="card__presios">
            <Card className="card1" style={{ width: '18rem' }}>
                <Card.Header >USD $50</Card.Header>
                <ListGroup variant="flush">                 
                    <ListGroup.Item>Fecha</ListGroup.Item>
                    <ListGroup.Item>Adultos</ListGroup.Item>
                    {/* <ListGroup.Item ><Button className="botonacts" href="/Confirmar" variant="warning" type="submit">
            reservar </Button></ListGroup.Item> */}
                </ListGroup>
            </Card>
          </div>



      <br/>
        <div className="ubicacion">
        <h3>TREN DEL FIN DEL MUNDO (OPCINAL)</h3>
        </div>
        <div className="lineacami">
            <hr/>
          </div> 
          <br/>
        <div className="descripcion"><h3>DESCRIPCION</h3></div>
        <div className="caminata2"> 
        
          <br/>
        <p>"La Estación del Fin del Mundo", es la estación cabecera de este ferrocarril y se encuentra continuando la ruta nacional Nº 3, hacia el "Parque Nacional Tierra del Fuego".</p>
        <p>La formación parte de la estación Fin del Mundo y utiliza el terraplén original de lo que fuera el trencito de los presos. A lo largo del camino se divisa la reconstrucción de un campamento indígena y una cascada natural, llamada “Cascada de la Macarena”.</p>
        <p>El tren se interna luego 4,5 Km. dentro del Parque donde se puede continuar en autobús la visita al Parque Nacional Tierra del Fuego o bien regresar a la Estación principal.</p>
        <p>Durante el paseo podremos disfrutar de paisajes bellísimos observando ríos, cascadas, bosques, montañas y túrbales. También conoceremos la historia de lo que fue el antiguo tren de los presos, y su relación con el nacimiento de Ushuaia y el encanto de viajar en un ferrocarril de época, locomotoras a vapor, y la nostalgia de una era que ya pasó.</p>
        <p></p>
        <br/>
        </div>
        <hr className="linea"/> 
        <br/>
        <div className="caminata3"> 
          <h3>CRONOGRAMA</h3>
        </div>
        
        <div className="descripcion__caminate3">
          <br/>
          <p><FcCheckmark/>Duración: 1 hs ida en Excursión Parque Nacional o 1 ½ hs en Round Trip</p>
          <p><FcCheckmark/>Salidas 09:30 y 15:00 hs. Presentación 30 minutos antes para el pre embarque y poder visitar la muestra fotográfica de presos de la época</p>
          <p>  elementos de valor histórico ferroviario, el taller y la boutique</p>
          <br/>
          <p>TARIFAS:</p>
          <p><li>Adultos General: AR$ 4900 </li></p>
          <p><li>Menores General de 4 a 12 años: AR$ 2450</li></p>
          <p><li>Adultos Argentinos: AR$ 4200</li></p>
          <p><li>Menores Argentinos de 4 a 12 años: AR$ 2100 </li></p>
          <p><li>Jubilados argentinos: AR$ 2600</li></p>
          {/* <p>Vigencia del 01/10/21 al 30/04/22</p> */}
        </div>  
    </div>



    )
}

export default Actividades;
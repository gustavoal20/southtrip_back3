import React from "react";
import './Actividades.css';
import caminata from './Imagenes/caminata.jpeg'
import { Card, Form, ListGroup, Button } from "react-bootstrap";
import {FcCheckmark } from "react-icons/fc";
import barco from './Imagenes/barco.jpg'
import BtnFlotante from "../Btn-flotante/BtnFlotante";


const Actividades = () => {

    return (

    <div className="MiniSki">

      <BtnFlotante/>

          <div className="barco">
          <img src={barco}  alt=""/>
          </div>   

            <br/>
            <br/>
            
          <div className="card__presios">
            <Card className="card1" style={{ width: '18rem' }}>
                <Card.Header >USD $57</Card.Header>
                <ListGroup variant="flush">                 
                    <ListGroup.Item>Fecha</ListGroup.Item>
                    <ListGroup.Item>Adultos</ListGroup.Item>
                    {/* <ListGroup.Item ><Button className="botonacts" href="/Confirmar" variant="warning" type="submit">
            reservar </Button></ListGroup.Item> */}
                </ListGroup>
            </Card>
          </div>

          <div className="caminata"> 
          <h3>CANAL DE BEAGLE</h3>
          </div> 

          <div className="lineacami">
            <hr/>
          </div> 

      <div className="info__container">
      <div className="informacion__travesia">
          <div className="iconos"><p> Duración: </p><p> 4hs </p> </div>
          {/* <div className="iconos2"><p> Cancelacion:</p> <p></p></div> */}
          <div className="iconos3"><p> Maxi de personas:</p> <p> 26 </p></div>
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
          Salimos del puerto local con un grupo reducido de pasajeros, recorriendo la bahía de Ushuaia y disfrutando del entorno montañoso.<p/>
          <p>Nos acercamos al faro Les Eclaireurs, icono de nuestra ciudad. Nos maravillamos al ver los cormoranes roqueros sobre los acantilados de las rocas. </p>
          <p>En otras de las islas encontramos lobos marinos de un pelo y de dos pelos. Ponemos proa hacia la isla de los pájaros donde habitan los cormoranes reales e imperiales. </p>
          <p>Continuamos hacia la isla Bridges, famosa por sus concheros yámanas y su espléndida vista de las costas chilenas y argentinas.</p>
          <p>Desembarcamos y caminamos por un sendero de interpretación de flora, avifauna y restos arqueológicos. Durante la travesía compartimos té, chocolate, y por supuesto, el típico mate argentino.</p>
          <br/>
          <p>Niños entre 3 y 9 años abonan el 50%, y menores de 3 años no abonan.</p>
          <br/>
         
    </div>
        
        <hr className="linea"/> 
        <br/>
        <div className="caminata3"> 
          <h3>CRONOGRAMA</h3>
        </div>

        <div className="descripcion__caminate3">
          <br/>
          <p><FcCheckmark/> 10:00hs y 15:00hs	Salida del muelle turístico</p>         
          <p><FcCheckmark/>	Navegación por la bahía de Ushuaia</p>
          <p><FcCheckmark/>	Salida al Canal Beagle</p>
          <p><FcCheckmark/>	Avistaje de lobos marinos de uno y de dos pelos</p>
          <p><FcCheckmark/>	Avistaje de cormoranes y aves del Beagle</p>
          <p><FcCheckmark/>	Arribo al faro Les Eclerairs</p>
          <p><FcCheckmark/>	Llegada a Islas Bridges</p>
          <p><FcCheckmark/>	Inicio de caminata por la isla e interpretación</p>
          <p><FcCheckmark/>	Vuelta a la embarcación</p>
          <p><FcCheckmark/>	Llegada al muelle turístico</p>
          <p>Esta excursión puede sufrir variantes por motivos climáticos.</p>
          <br/>
          <h5>Recomendamos llevar:</h5>
         <br/>
          <ul><li><p>Agua</p></li> </ul>
          <ul><li><p>Capa para la lluvia</p></li> </ul>
          <ul><li><p>Anteojos de sol</p></li> </ul>
          <ul><li><p>Camara de fotos</p></li> </ul>
            </div>
       <div className="linea">
         <hr/>
       </div> 

        <div className="ubicacion">
        <h3>UBICACION</h3>




        </div>
        
    </div>



    )
}

export default Actividades;
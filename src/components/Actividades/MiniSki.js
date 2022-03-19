import React from "react";
import './Actividades.css';
import caminata from './Imagenes/caminata.jpeg'
import { Card, Form, ListGroup, Button } from "react-bootstrap";
import {FcCheckmark } from "react-icons/fc";
import ski from './Imagenes/ski.jpg'


const Actividades = () => {

    return (

    <div className="MiniSki">

          <div className="ski">
          <img src={ski}  alt=""/>
          </div>   

            <br/>
            <br/>
            
          <div className="card__presios">
            <Card className="card1" style={{ width: '18rem' }}>
                <Card.Header >USD $52</Card.Header>
                <ListGroup variant="flush">                 
                    <ListGroup.Item>Fecha</ListGroup.Item>
                    <ListGroup.Item>Adultos</ListGroup.Item>
                    <ListGroup.Item ><Button className="botonacts" href="/Confirmar" variant="warning" type="submit">
            reservar </Button></ListGroup.Item>
                </ListGroup>
            </Card>
          </div>

          <div className="caminata"> 
          <h3>Mini Ski Week</h3>
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
          <p>Cerro Castor es producto de un proyecto familiar que logró cristalizarse el 9 de julio de 1999 cuando abrió por primera vez sus puertas al público. Muchos son los cambios que se han producido a lo largo de estos 14 años de trabajo. En un principio Cerro Castor contaba solamente con 3 telesillas cuádruples, 1 teleski, 15 pistas y un edificio en la base</p>

          <p>Hoy su infraestructura es diferente y ha crecido mucho pero mantiene la esencia que lo caracterizó desde sus comienzos. Gracias al esfuerzo de todos, hoy esta montaña posee medios de elevación para todos los niveles de esquí, alojamiento en la base, 7 puntos gastronómicos que permiten apreciar el paisaje fueguino desde diferentes lugares, pero por sobre todas las cosas mantiene esa calidad de nieve que siempre la caracterizó.</p>
          <p>NO INCLUYE EQUIPOS DE SKI Y SNOWBOR </p>

        <br/>
         <h5>Recomendamos llevar:</h5>
         <br/>
       <ul><li><p>Agua</p></li> </ul>
       <ul><li><p>Anteojos de sol</p></li> </ul>
       <ul><li><p>Protector solar</p></li> </ul>
      
         </div>
        
        <hr className="linea"/> 
        <br/>
        <div className="caminata3"> 
          <h3>CRONOGRAMA</h3>
        </div>

        <div className="descripcion__caminate3">
          <br/>
          <p><FcCheckmark/> 9:00 hs Pick up por Hoteles</p>         
          <p><FcCheckmark/> 9:40hs Arribo al cerro castor y asistencia</p>
          <p><FcCheckmark/> 10:00hs	Apertura de Medios</p>
          <p><FcCheckmark/> 16:45hs Última Subida</p>
          <p><FcCheckmark/> 17:00hs Regreso a Ushuaia y traslado a hoteles</p>
          <p>Esta excursión puede sufrir variantes, sujeto a disponibilidad de acceso a las pistas y medios de elevación.</p>
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
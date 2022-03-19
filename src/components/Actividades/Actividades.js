import React from "react";
import './Actividades.css';
import caminata from './Imagenes/trekking2.jpg'
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoCircleSlash } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import { Card, Form, ListGroup, Button } from "react-bootstrap";
import ubicacion from './Imagenes/ubicacion.jpeg'
import {FcCheckmark } from "react-icons/fc";

const Actividades = () => {

    return (

    <div className="Actividades">

          <div className="img">
          <img src={caminata}  alt=""/>
          </div>   

            <br/>
            <br/>
            
          <div className="card__presios">
            <Card className="card1" style={{ width: '18rem' }}>
                <Card.Header >USD$80</Card.Header>
                <ListGroup variant="flush">                 
                    <ListGroup.Item>Fecha</ListGroup.Item>
                    <ListGroup.Item>Adultos</ListGroup.Item>
                    <ListGroup.Item ><Button className="botonacts" href="/Confirmar" variant="warning" type="submit">
            reservar </Button></ListGroup.Item>
                </ListGroup>
            </Card>
          </div>

          <div className="caminata"> 
          <h3>TREKKING LAGUNA ESMERELDA</h3>
          </div> 

          <div className="lineacami">
            <hr/>
          </div> 

      <div className="info__container">
      <div className="informacion__travesia">
          <div className="iconos"><p> Duración: </p><p> 10hs</p> </div>
          <div className="iconos2"><p> Cancelacion:</p> <p>no se cansela</p></div>
          <div className="iconos3"><p> Maxi de personas:</p> <p> 20 </p></div>
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
          <p>Salimos de la ciudad por la Ruta Nacional N° 3 hasta llegar al punto de partida donde nos preparamos para continuar a pie.</p>

          <p>La duración aproximada desde el inicio de la caminata, hasta alcanzar la laguna es de 2 horas, en las que atravesaremos el bosque subantártico, los valles de turba y ríos con diques de castores.</p>

         <p>Una vez que alcanzamos la laguna, destinamos un momento para apreciar su belleza, su singular color y descubrir el entorno que hace que este lugar tenga un encanto particular.</p>
         <p>Allí nos detendremos para reponer energías con un lunch box y una bebida antes de emprender el regreso por el sendero que nos llevó hasta allí.</p>
        <br/>
         <h5>Incluye:</h5>
         <br/>
       <p><FcCheckmark/> Transfer hotel.</p>
       <p><FcCheckmark/> Punto de partida de la caminata </p> 
       <p><FcCheckmark/> Box lunch por persona (sándwich + alfajor + botella de agua 500 ml)</p>
       <p><FcCheckmark/> Bastones (en caso de requerirse)</p> 
       <p><FcCheckmark/> Crampines y pilotos de lluvia.</p> 
         </div>
        
        <hr className="linea"/> 
        <br/>
        <div className="caminata3"> 
          <h3> CRONOGRAMA</h3>
        </div>

        <div className="descripcion__caminate3">
          <br/>
          <p><FcCheckmark/> 9:00hs Salida de la ciudad de Ushuaia.</p>         
          <p><FcCheckmark/> 9:30hs Comienzo de caminata.</p>
          <p><FcCheckmark/>12:00hs Llegada a la Laguna y Vianda.</p>
          <p><FcCheckmark/> 12:30hs	Comienzo de regreso.</p>
          <p><FcCheckmark/> 14:30hs	Regreso a la ciudad de Ushuaia.</p>
          <p><FcCheckmark/> 15:00hs	Llegada a la ciudad.</p>
          <p>Es requisito tener aptitud física para realizar esta caminata; no podrán realizarla quienes tengan restricciones </p>
          <p>físicas o no cuenten con la vestimenta y el calzado adecuados.</p>
          <p>Debe traer: mochila, calzado impermeable que tenga suela con buen agarre y abrigo.</p>
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
import React from "react";
import './Actividades.css';
import caminata from './Imagenes/caminata.jpeg'
import { Card, Form, ListGroup, Button } from "react-bootstrap";
import {FcCheckmark } from "react-icons/fc";
import chata from './Imagenes/chata2.jpg'


const Actividades = () => {

    return (

    <div className="MiniSki">

          <div className="chata">
          <img src={chata}  alt=""/>
          </div>   

            <br/>
            <br/>
            
          <div className="card__presios">
            <Card className="card1" style={{ width: '18rem' }}>
                <Card.Header >USD $144</Card.Header>
                <ListGroup variant="flush">                 
                    <ListGroup.Item>Fecha</ListGroup.Item>
                    <ListGroup.Item>Adultos</ListGroup.Item>
                    <ListGroup.Item ><Button className="botonacts" href="/Confirmar" variant="warning" type="submit">
            reservar </Button></ListGroup.Item>
                </ListGroup>
            </Card>
          </div>

          <div className="caminata"> 
          <h3>LAGOS 4X4</h3>
          </div> 

          <div className="lineacami">
            <hr/>
          </div> 

      <div className="info__container">
      <div className="informacion__travesia">
          <div className="iconos"><p> Duración: </p><p> 7/8 hs</p> </div>
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
          <p>Es una excursión que ofrece aventura de principio a fin, recomendable para todos los que busquen pasar un día diferente en el Fin del Mundo, rodeados por naturaleza y hermosos paisajes.</p>
          <p>Comenzamos buscándolos por los hoteles, saliendo por la Ruta Nacional nº 3 hacia el norte, en dirección a los Lagos Escondido y Fagnano, nuestros principales objetivos.</p>
          <p>Realizamos la primera parada en el Valle Carbajal, donde podremos apreciar los turbales, con una imponente vista de la cordillera y los glaciares de montaña.</p>
          <p>Siguiendo por la misma ruta, pasamos por los centros invernales, Cerro Castor, uno de los principales centros de esquí andino de Argentina, para luego continuar el camino observando hermosos paisajes.</p>
          <p>Reanudamos el recorrido, dejando los valles, para llegar a la parte montañosa, más precisamente al Paso Garibaldi, límite de la Cordillera de los Andes, donde podremos apreciar hermosos paisajes. Es en este lugar donde comenzamos con la primera de las partes de aventura en 4x4, descendiendo por la vieja ruta 3, realizando un recorrido para llegar a la antigua Hostería Petrel,
           a orillas del Lago Escondido, donde tendremos una magnífica postal de este lago. Precisamente, su nombre viene porque está en un valle profundo, en el medio de la montaña.</p>
          <p> Salimos de la vieja ruta 3 para retomar por unos minutos la Ruta Nacional nº 3 y llegamos a la cabecera del Lago Escondido, frente al aserradero del mismo nombre, donde nace el Río Milna, y tendremos una magnífica postal de este lago. Aquí además nace la ruta nº 119, próximo escenario de nuestra aventura 4x4. Transitamos esta ruta por aproximadamente 2 km para luego dejarla
         atrás y comenzar el circuito “off road” hasta llegar al Lago Fagnano, lugar donde tendrán tiempo para realizar algunas pequeñas caminatas por la costa. Después, tomamos un camino alternativo a orillas de este Lago, incluso metiéndonos en el agua hasta que llegamos nuevamente a la ruta 119 y por aquí volver a la Ruta Nacional nº 3.</p>
          <p>Después, para recuperar energías, hacemos la parada para el almuerzo, que se realiza en un cálido restaurant del Valle de Tierra Mayor o en nuestro refugio del bosque, y así recordar los buenos momentos de la excursión.</p>
        
          <h5>Incluye:</h5>
          <p><FcCheckmark/> Traslados</p>         
          <p><FcCheckmark/> Café en las paradas</p>
          <p><FcCheckmark/> Almuerzo en un cálido restaurante en el Valle de Tierra Mayor (cordero patagonico, ensaladas, postre y bebidas)</p>
        
        <br/>
        

        <br/>
        
      
         </div>
        
        <hr className="linea"/> 
        <br/>
        <div className="caminata3"> 
          <h3>CRONOGRAMA</h3>
        </div>

        <div className="descripcion__caminate3">
          <br/>
          <p><FcCheckmark/> Salida: 08:30 hs aproximadamente</p>
          <p><FcCheckmark/>A las 15:00 hs aproximadamente emprendemos el regreso a la ciudad, llegando al hotel entre las 16:00 / 16:30 hs</p>
          <p><FcCheckmark/>Tarifa: AR$ 15000</p>
          <p><FcCheckmark/>Política de menores: 5 a 11 años inclusive: AR$ 9600</p>
          <p><FcCheckmark/>Vigencia: del 01/03/22 hasta 31/05/22</p>
          <p><FcCheckmark/>Dificultad: baja - apta para toda la familia</p>

          <br/>
          
          
          <br/>
          <h5>Recomendamos llevar:</h5>
         <br/>
            <ul><li><p>Agua</p></li> </ul>
            <ul><li><p>Anteojos de sol</p></li> </ul>
            <ul><li><p>Protector solar</p></li> </ul>
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
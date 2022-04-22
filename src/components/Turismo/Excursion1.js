import React from "react";
import './aventura.css'
import {  Card } from "react-bootstrap"
import caminata1 from "./Imagenes/caminata.jpg"
import { FcFlashOn } from "react-icons/fc";
import fondo1 from './Imagenes/aventura.1.jpeg'

//import turismo from './Imagenes/turismo.png'

const Excursion1 = () => {
    return(
        <div className="laguna" id='actividades'>

            
                <Card className="CARDAVEN">
                    <Card.Img className="imgaven" variant="top" src={caminata1}/>
                    <Card.Body className="body">
                    <div className="tituloaven">
                    <a href="/Actividades"><p>LAGUNA ESMERALDA</p></a>
                    </div>    
                    <div className="fromaven">
                    <p> <FcFlashOn/>from  USD$80</p>
                    </div>
                    <div className="arg">
                    
                    </div>   
                    </Card.Body>
                </Card>

                
                <Card className="CARDAVENPARQUE">
                    <Card.Img className="imgaven__parque" variant="top" src={caminata1}/>
                    <Card.Body className="body">
                    <div className="tituloaven">
                    <a href="/ParqueNacional"><p>PARQUE NACIONAL TIERRA DEL FUEGO</p></a>
                    </div>    
                    <div className="fromaven">
                    <p> <FcFlashOn/>from  USD$52</p>
                    </div>
                    <div className="arg">
                    
                    </div>   
                    </Card.Body>
                </Card>  
            
                <div  className="imagenfondo1" style={{backgroundImage: `url(${fondo1})` }}></div>
            
        </div>
    )
};

export default Excursion1;
import React from "react";
import './aventura.css'
import {  Card } from "react-bootstrap"
import caminata1 from "./Imagenes/caminata.jpg"
import { FcFlashOn } from "react-icons/fc";
import fondo2 from './Imagenes/caminata.jpg'
//import turismo from './Imagenes/turismo.png'

const Excursion2 = () => {
    return(
        <div>

        <div className="laguna" className="imagenfondo" style={{backgroundImage: `url(${fondo2})` }}>
                <Card className="CARDAVEN">
                    <Card.Img className="imgaven" variant="top" src={caminata1}/>
                    <Card.Body className="body">
                    <div className="tituloaven">
                    <a href="/MiniSki"><p>MINI SKI WEEK</p></a>
                    </div>    
                    <div className="fromaven">
                    <p> <FcFlashOn/>from  ARS$ consultanos</p>
                    </div>
                    <div className="arg">
                    
                    </div>   
                    </Card.Body>
                </Card> 

            <div className="chatas" >
                <Card className="CARDAVEN">
                    <Card.Img className="imgaven" variant="top" src={caminata1}/>
                    <Card.Body className="body">
                    <div className="tituloaven">
                        <a href="/Lagos4x4"><p>LAGOS 4x4</p></a>
                    </div>    
                    <div className="fromaven">
                        <p> <FcFlashOn/>from  USD$114</p>
                    </div>
                    <div className="arg">
                    
                    </div>   
                    </Card.Body>
                </Card>  
            </div>


            <div className="navegacion" >
                <Card className="CARDAVEN__nave">
                    <Card.Img className="imgaven" variant="top" src={caminata1}/>
                    <Card.Body className="body">
                    <div className="tituloaven">
                        <a href="/CanalBeagle"><p>NAVEGACION CANAL DE BEAGLE</p></a>
                    </div>    
                    <div className="fromaven">
                        <p> <FcFlashOn/>from  USD$60</p>
                    </div>
                    <div className="arg">
                    
                    </div>   
                    </Card.Body>
                </Card>  
            </div>
        </div>


             

        </div>
    )
};

export default Excursion2;
import React from "react";
import { Carousel } from 'react-bootstrap';
import './carousel.css';
//import image1 from '../../img/1.jpg';
import portada1 from "./imagenes/portada1.jpg";
import portada2 from "./imagenes/paisaje2.jpg";
import portada3 from "./imagenes/portada3.jpg";
import faro from "./imagenes/paisaje.jpg"
//import "./Portada.css"

const Portada = () => {

    return (
    <div className="portada">
        

            <Carousel className="portada2">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={faro} height={520}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Descubrí Ushuaia, el fin del Mundo</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={portada2} height={520}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Descubrí Ushuaia, el fin del Mundo</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={portada3} height={520}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Descubrí Ushuaia, el fin del Mundo</h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        {/* <Carousel>
            <Carousel.Item interval={3000}>
                <img height={500} alt="..." src={faro} class="d-block w-100"/>
                <Carousel.Caption>
                    <h1 className="font-weight-bold mt-2">
                        <span>Descubrí Ushuaia,</span> 
                        <span> el fin del Mundo</span>
                    </h1>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img height={500} alt="..." src={portada2} class="d-block w-100"/>
                <Carousel.Caption>
                <h1 className="font-weight-bold mt-2">
                        <span>Descubrí Ushuaia,</span> 
                        <span> el fin del Mundo</span>
                    </h1>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img height={500} alt="..." src={portada3} class="d-block w-100"/>
                <Carousel.Caption>
                <h1 className="font-weight-bold mt-2">
                        <span>Descubrí Ushuaia,</span> 
                        <span> el fin del Mundo</span>
                    </h1>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>   
        */}
        
         
    </div>
    

    )
}

export default Portada
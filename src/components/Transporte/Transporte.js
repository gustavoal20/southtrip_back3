import React from 'react';
import traslado from './imagenes/traslados_sinfondo1.png';
import "./Transporte.css";
import {Button} from "react-bootstrap"

// color de fondo original style={{backgroundColor: '#f5f5f5'}}

function Transporte() {
    return (
        
     <div className='transporte' id='traslados' >

        <div className='traslados'>
            <h2>TRASLADOS</h2>
        </div>
             <img src={traslado} />

             <div className='traslados2'><h3>Desde ahora ya podes contratar tu traslado!!!</h3></div> 

             <div>
                <h2 className="transportetex">
                    <span >
                       
                        <div>Desde el aeropuerto hasta tu hotel o alojamiento </div> 
                        <div>tanto ida, como ida o vuelta, en servicios regulares o privados. </div>
                        <br/>
                        <div >Con todos los medios de pago. </div>
                    </span>
                </h2>

                <div className='boton__contactanos'>
                     <Button variant='dark'><a href='/Contacto' target="_blank">Contactanos</a></Button>
                 </div>
            </div>
            
        
    </div>
    
 )
}

export default Transporte

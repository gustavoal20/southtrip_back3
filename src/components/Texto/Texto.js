import React from "react";
import "./Texto.css"



const Texto = () => {

    return (
    <div className="textodebienvenida">
            <h2 class="font-weight-bold">
                <div class="m-3 text-left"> 
                    <span className="bienvenidos" >BIENVENIDOS A USHUAIA!!!</span>
                </div>
            </h2>
        
            <div className="texto__descripcion">
                  
                   
                        <div >La ciudad de Ushuaia representa en nuestra imaginación lo más lejano, el “Fin del Mundo”.</div>
                        <div> Está ubicada a orillas del Canal de Beagle, en el extremo sur de la Isla Grande de Tierra del Fuego, rodeada por los Montes Martial. </div>
                        <div>  Su privilegiada ubicación permite disfrutar de montañas, mar y bosques.</div>
                        <br/>
                        <div> Gracias por elegir Ushuaia y Southtrip para organizar tu próximo viaje!</div>
                    
                 
            </div>

    </div>

    );
}

export default Texto;
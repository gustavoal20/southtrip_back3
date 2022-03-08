import React from "react";
import "./Texto.css"



const Texto = () => {

    return (
    <div className="textodebienvenida">
       {/* <h3 className="texto">BIENVENIDOS A USHUAIAA!!!</h3>   

       <h1 className ="texto2" >La ciudad de Ushuaia representa en nuestra imaginación lo más lejano, el “Fin del Mundo”.
            Está ubicada a orillas del Canal de Beagle, en el extremo sur de la Isla Grande de Tierra del Fuego, rodeada por los Montes Martial. 
            Su privilegiada ubicación permite disfrutar de montañas, mar y bosques.</h1> 
         */}
            <h2 class="font-weight-bold">
                <div class="m-3 text-left"> 
                    <span className="bienvenidos" >BIENVENIDOS A USHUAIA!!!</span>
                </div>
            </h2>
        
            <div className="texto__descripcion">
                  
                    
                        <p >La ciudad de Ushuaia representa en nuestra imaginación lo más lejano, el “Fin del Mundo”.</p>
                        <p> Está ubicada a orillas del Canal de Beagle, en el extremo sur de la Isla Grande de Tierra del Fuego, rodeada por los Montes Martial. </p>
                        <p>  Su privilegiada ubicación permite disfrutar de montañas, mar y bosques.</p>
                        <br/>
                        <p> Gracias por elegir Ushuaia y Southtrip para organizar tu próximo viaje!</p>
                   
                 
            </div>

    </div>

    );
}

export default Texto;
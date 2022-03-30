import React from 'react';
import './Btn.css';
import { BsWhatsapp } from 'react-icons/bs';
import whatsapp from './wapp2.png';

const BtnFlotante = () => {
    return(
        // <div class="fl-fl float-tw">
        //     <a href="wa.link/owdymm" target="_blank">
        //         <img src={whatsapp}  alt="Logo"/>
        //     </a>
            
        // </div>
        <div className='btnwhat' >
            
                <a href='https://api.whatsapp.com/send?phone=543462307763&text=puto%20el%20que%20lee' target="_blank" >
                <p>Estamos en linea, contactanos!</p>
                 <img src={whatsapp} className="btnwhat__img"/> 
                </a>
                 
            
        </div>
    )
}

export default BtnFlotante;
//style={{backgroundColor: "#0077d7"}}
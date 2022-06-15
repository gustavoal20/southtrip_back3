import React from 'react';
import './Btn.css';
import { BsWhatsapp } from 'react-icons/bs';
import whatsapp from './wapp2.png';

const BtnFlotante = () => {
    return(
        <div>
        
        <div className='btnresponsive'>
                <a href='https://api.whatsapp.com/send?phone=542901493987&text=dejanos%20tu%20consulta%20' target="_blank" >
                    <img src={whatsapp} className="btnwhat__img"/> 
                </a>
        </div>


        <div className='btnwhat' >
            
                <a href='https://api.whatsapp.com/send?phone=5492901493987&text=Dejanos%20tu%20consulta%20' target="_blank" >
                <p>Estamos en linea, contactanos!</p>
                 <img src={whatsapp} className="btnwhat__img"/> 
                </a>
                 
            
        </div>

        </div>
    )
}

export default BtnFlotante;
//style={{backgroundColor: "#0077d7"}}
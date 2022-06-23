import React from "react";
import logo from "./imagenes/logo.jpg";
//import { FaInstagram } from 'react-icons/fa';
import { BsPinMap } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
//import { BsPinMap } from 'react-icons/bs';
import "./Barrainferior.css"

const Barrainferior = () => {

    return (
    <div className="barra">
    <a href="/">
        <img src={logo} alt= " " />
        </a>   
        <div className="barra__inferior">
            <p> <BsPinMap/>Ushuaia Tierra Del Fuego Argentina</p>
            <p> <BsTelephone/> +54 9 2901406821</p>
            <p> <FiMail/> southripushuaia@gmail.com</p>
            <p> <BsWhatsapp/> +54 9 2901493987</p>
            <p>  ©Copyright 2022 Southrip</p>


        </div>    
       
        
        
    </div>
    

    )
}
export default Barrainferior
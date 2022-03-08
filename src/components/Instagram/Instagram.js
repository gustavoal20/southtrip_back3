import React from 'react'
import { Card, CardGroup,Button, Image, CardImg} from 'react-bootstrap'
//import { AiFillInstagram } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import gfd from "./imagenes/logo.jpg";
import instagram6 from "./imagenes/instagram-1.png";
import instagram from "./imagenes/instagram.png";
import instagram2 from "./imagenes/instagram2.png";
import instagram3 from "./imagenes/instagram3.png";
import instagram4 from "./imagenes/instagram4.png";
import instagram5 from "./imagenes/instagram5.png";
import "./Instagram.css"
import faro from "./imagenes/faro.jpeg"




//import {Link} from "react"




function Instagram() {
    return (
        


    <div className='instagram'>
        <div className='botonin'>
            
             <FaInstagramSquare/> 
              <a href='https://www.instagram.com/southtripushuaia/' target="_blank"> southtripushuaia</a> 

    </div>
        {/* <div className='img__insta'>
            <img src={faro} width='50%'></img>
        </div> */}


        <div className="container__instagramresponsive">
            <div className="row">
                <div className="col-9">
                    <a href='https://www.instagram.com/p/CZABLMBrUFV/' target="_blank">
                    <img src={instagram6} width='100%' height='100%'></img></a>
                </div>
                <div className="col-9">
                    <a href='https://www.instagram.com/p/CZHb7w0LTTR/' target="_blank">
                    <img src={instagram} width='100%' height='100%'/></a>
                </div>
            </div>
        </div>

       {/* -------instagram responsive------ */}

        <div className="container">
            <div className="row">
                <div className="col-4">
                    <a href='https://www.instagram.com/p/CZABLMBrUFV/' target="_blank">
                    <img src={instagram6} width='100%' height='100%'></img></a>
                </div>
                <div className="col-4">
                <a href='https://www.instagram.com/p/CXWqSL5J35J/' target="_blank">
                    <img src={instagram} width='100%' height='100%'/></a>
                </div>
                <div className="col-4">
                <a href='https://www.instagram.com/p/CWljiCupYLe/' target="_blank">
                    <img src={instagram2} width='100%' height='100%'/></a>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-4">
                <a href='https://www.instagram.com/p/CTlDOB8sUxL/' target="_blank">
                <img src={instagram3} width='100%' height='100%'/></a>
                </div>
                <div className="col-4">
                <a href='https://www.instagram.com/p/CTSJMZmMUWe/' target="_blank">
                <img src={instagram4} width='100%' height='100%'/></a>
                </div>
                <div className="col-4">
                <a href='https://www.instagram.com/p/CTlDOB8sUxL/' target="_blank">
                <img src={instagram5} width='100%' height='100%'/></a>
                </div>
            </div>
        </div>
        
        <div className='boton2'>
        <Button href="https://www.instagram.com/southtripushuaia/" variant="warning" target="_blank"> <BsInstagram/> Siguenos en instagram</Button>
        </div> 
</div>


    )
}

export default Instagram

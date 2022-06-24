import React from "react";

import { Form, Button, } from "react-bootstrap";
import './Contacto.css';
import faro from "./Imagenes/faro.jpeg"
import 'react-calendar/dist/Calendar.css';
import BtnFlotante from "../Btn-flotante/BtnFlotante";

function Form1() {
    const formRef = React.useRef();
    function handleSubmit(evt) {
      evt.preventDefault();


const formData = new FormData(formRef.current);
const values = Object.fromEntries(formData);
    }   
    return (

       
    <div className="contacto">
         <BtnFlotante/>
        <div className="textocon">
            <h3>Nos encantaría recibir tu contacto.</h3>
            <p>Envianos un mensaje y te responderemos lo antes posible!</p>
            <img className="faro__img" src={faro} width='40%' height='50%'/>

        </div>

        {/* <div className="faro">
            <img src={faro} width='50%' height='50%'/>
        </div> */}

        <div className="lineacon">
         <hr/>
        </div> 

<div className="formulario__contacto"> 

    <Form>
<div className="nombre">
    <Form.Control  type="text"  placeholder="Nombre *"  />
</div>
    <br/>
    {/* <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group> */}
    
    <div>
        <Form.Control type="email" placeholder="Email *" /> 
    </div>
    <br/>
    <div>
    <Form.Control type="text" placeholder="Celular *" />
    </div>
    <br/>
    <div>
    <Form.Select aria-label="Default select example">
        <option>Seleccione</option>
        <option value="1">Turismo</option>
        <option value="2">Aventura</option>   
        <option value="2">Traslado</option>  
    </Form.Select>
    </div>
    <br/>
     <div>
     <span className="wpcf7-form-control-wrap FechaViaje"><input type="date" name="FechaViaje"  className="wpcf7-form-control wpcf7-date wpcf7-validates-as-required wpcf7-validates-as-date form-control" aria-required="true" aria-invalid="false" placeholder="Fecha Viaje" /></span>
     {/* <Form.Control type="Calendar"/> <Calendar Selected={this.state.fecha}
        /> */}
    </div>  
   
        <br/>
        <div>
        <Form.Control as="textarea" rows={7} placeholder="Consulta"/>
        </div>
        <br/>
        <div className="campos">
            <p> Campos obligatorios * </p>
        </div>
        <div className="botonen">
            <Button variant="warning" >ENVIAR MENSAJE</Button>
        </div>
        </Form>
    <br/>
    <br/>
    </div>
   
</div>
    )
}


export default Form1;
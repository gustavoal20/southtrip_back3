import React from "react";
import './Confirmar.css'
import {Form, Card, Col, Button} from 'react-bootstrap'
import caminata from './Imagenes/caminata.jpg'

const Confirmar = () => {
    return(

    <div className="confirmar">
            <div className="linearoja">
                <hr/>
            </div>
           
            
        <div>
            <h2 className="facturacion">
                Detalles de facturación
            </h2>
            <div className="lineafacturacion">
                <hr/>
            </div>
        </div>

        <div className="reserva">
                <h2>Su reserva</h2>
        </div>

        <br/>
        <br/>
        <div className="cardreserva">
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                <img className="cardcaminata" src={caminata}></img>
                
                    <Card.Title className="parque">LAGUAN ESMERALDA</Card.Title>
                    
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                        <br/> 
                        <br/>
                        <div className="lineaparque">
                        <hr/>
                        </div>
                        <br/>
                        <br/>                       
                        <div className="total">
                        <p className="precio">USD$80</p>
                        <p >Total:</p>
                        </div>
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>

        
        <div className="formulariocompleto">
    <Form >

        
        <p>Nombre *</p>
        <Col>
         <Form.Control type="text" placeholder="Nombre" />
        </Col>
        

        <br/>
         
            <p>Apellido *</p>
        <Col>
            <Form.Control type="text" placeholder="Apellido" />
        </Col>
        

        <br/>
    
        <p>Dirección de correo electrónico *</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
             {/* <Form.Label>Email </Form.Label> */}
        <Form.Control type="email" placeholder="Email" />
        </Form.Group>
  
        <br/>
    
        <p>País *</p>
        <Form.Select aria-label="Default select example">
            <option>Seleccione pais</option>
            <option value="1">Argentina</option>
            <option value="2">Uruguay</option>   
            <option value="2">Brasil</option>  
        </Form.Select>
   
        <br/>
    
        <p>Dirección *</p>
        <Form.Control  type="text"  placeholder="Provincia/Nombre y numero de calle"  />
    
        <br/>
    
        <p>Dirección Ushuaia *</p>
        <Form.Control  type="text"  placeholder="Hotel/Alojamiento"  />
 
        <br/>
    
        <p>Celular *</p>
        <Form.Control  type="text"  placeholder="Celular *"  />
        <br/>
        <div className="botonen">
            <Button variant="warning" >ENVIAR</Button>
        </div>
    </Form>
    </div>
 </div>
    )
}

export default Confirmar
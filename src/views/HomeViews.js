import React from 'react';
//import ReactDOM from 'react-dom';
//import '../index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import Barrasuperior from '../components/Barrasuperior/Barrasuperior';
import Portada from '../components/Portada/Portada';
import Texto from '../components/Texto/Texto';
import Excursiones from '../components/Excursiones/Excursiones';
import Instagram from '../components/Instagram/Instagram';
import Transporte from '../components/Transporte/Transporte';
import Barrainferior from '../components/Barrainferior/Barrainferior';
import "../index.css"
import BtnFlotante from '../components/Btn-flotante/BtnFlotante';
//import Turismo from '../components/Turismo/Turismo';
//import Ubicacion from '../components/Ubicacion/Ubicacion'
//import ReactDOM from 'react-dom';
import ViewExcursiones from '../components/Turismo/ViewExcursiones';
const HomeViews = () =>(

  
  <div className='Home'>
  <Barrasuperior/>
  <Portada/>
  <BtnFlotante/>
  <br/>
  <br/>
  <Texto/>
  <br/>
  <br/>
  <ViewExcursiones/>
  <br/>
  <br/>
  <Transporte/>
  <Excursiones/>
  <br/>
  <br/>
  <br/>
   <Instagram/> 
  <br/>
  <br/>
  <Barrainferior/>
  </div>




)

export default HomeViews
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import HomeView from '../views/HomeViews';
import LoginView from '../views/LoginView';
import PublicRoute from './helperRoutes';
import ActividadesViews from '../views/ActividadesViews';
import ParqueNacionalViews from '../views/ParqueNacionalViews';
import MiniSki from '../views/MiniSki'
import Lagos4x4 from '../views/Lagos4x4Views'
import CanalBeagle from '../views/CanalBeagleViews'
import ContactoViews from '../views/ContactoViews';
import NosotrosViews from '../views/NosotrosViews';
import ConfirmarViews from '../views/ConfirmarViews';


const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoute exac path='/Confirmar' componen={ConfirmarViews}/>
            <PublicRoute exac path='/Nosotros' componen={NosotrosViews}/>
            <PublicRoute exac path='/Contacto' componen={ContactoViews}/>
            <PublicRoute exac path='/CanalBeagle' componen={CanalBeagle}/>
            <PublicRoute exac path='/Actividades' componen={ActividadesViews}/>
            <PublicRoute exac path='/ParqueNacional' componen={ParqueNacionalViews}/>
            <PublicRoute exac path='/MiniSki' componen={MiniSki}/>
            <PublicRoute exac path='/Lagos4x4' componen={Lagos4x4}/>
            <PublicRoute exac path='/login' componen={LoginView} />
            <PublicRoute exac path="/" componen={HomeView}/>
            <Redirect path='/**' to='/'/>
           
        </Switch>
    )
}

export default PublicRoutes;
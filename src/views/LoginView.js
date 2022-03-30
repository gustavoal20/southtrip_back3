import React from 'react';
import Login from '../components/Login/Login';
import LogoutButton from '../components/Login/Logout';
import Barrainferior from '../components/Barrainferior/Barrainferior';
import Barrasuperior from '../components/Barrasuperior/Barrasuperior';
import Perfil from '../components/Login/Perfil';


const LoginView = (props) => {
  return (
    <div className="App">
      <Barrasuperior />
        <br/>
        <dr/>
        <Login />
        <Perfil/>
        <LogoutButton/>
        
        <br/>
        <dr/>
      <Barrainferior />

    </div>
  );
}

export default LoginView;
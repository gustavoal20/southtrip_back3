import React from 'react';
import CanalBeagle from '../components/Actividades/CanalBeagle';
import Barrainferior from '../components/Barrainferior/Barrainferior';
import Barrasuperior from '../components/Barrasuperior/Barrasuperior';


const ActividadesViews = (props) => {
  return (
    <div>
      <Barrasuperior />
        <dr/>
        <CanalBeagle/>
        <br/>
        <dr/>
      <Barrainferior />

    </div>
  );
}

export default ActividadesViews;
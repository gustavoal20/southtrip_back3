import React from 'react';
import ParqueNacional from '../components/Actividades/ParqueNacional';
import Barrainferior from '../components/Barrainferior/Barrainferior';
import Barrasuperior from '../components/Barrasuperior/Barrasuperior';


const ActividadesViews = (props) => {
  return (
    <div>
      <Barrasuperior />
        <dr/>
        <ParqueNacional />
        <br/>
        <dr/>
      <Barrainferior />

    </div>
  );
}

export default ActividadesViews;
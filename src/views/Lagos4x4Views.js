import React from 'react';
import Lagos4x4 from '../components/Actividades/Lagos4x4';
import Barrainferior from '../components/Barrainferior/Barrainferior';
import Barrasuperior from '../components/Barrasuperior/Barrasuperior';


const ActividadesViews = (props) => {
  return (
    <div>
      <Barrasuperior />
        <dr/>
        <Lagos4x4/>
        <br/>
        <dr/>
      <Barrainferior />

    </div>
  );
}

export default ActividadesViews;
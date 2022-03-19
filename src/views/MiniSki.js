import React from 'react';
import MiniSki from '../components/Actividades/MiniSki';
import Barrainferior from '../components/Barrainferior/Barrainferior';
import Barrasuperior from '../components/Barrasuperior/Barrasuperior';


const ActividadesViews = (props) => {
  return (
    <div>
      <Barrasuperior />
        <dr/>
        <MiniSki />
        <br/>
        <dr/>
      <Barrainferior />

    </div>
  );
}

export default ActividadesViews;
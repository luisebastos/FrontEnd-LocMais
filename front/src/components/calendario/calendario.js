import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Calendario = () => {
  return (
    <div className="calendario-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="calendario-content">
        {/* conteudo pagina calendario */}
      </div>
    </div>
  );
};

export default Calendario;
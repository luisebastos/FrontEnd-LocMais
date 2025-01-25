import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Contratos = () => {
  return (
    <div className="contratos-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="contratos-content">
        {/* conteudo pagina contratos */}
      </div>
    </div>
  );
};

export default Contratos;
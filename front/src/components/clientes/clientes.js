import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Clientes = () => {
  return (
    <div className="clientes-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="clientes-content">
        {/* conteudo pagina Home */}
      </div>
    </div>
  );
};

export default Clientes;
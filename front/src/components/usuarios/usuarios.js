import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Usuarios = () => {
  return (
    <div className="usuarios-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="usuarios-content">
        {/* conteudo pagina usuarios */}
      </div>
    </div>
  );
};

export default Usuarios;
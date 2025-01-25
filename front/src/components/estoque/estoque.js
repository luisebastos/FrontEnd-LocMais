import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Estoque = () => {
  return (
    <div className="estoque-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="estoque-content">
        {/* conteudo pagina estoque */}
      </div>
    </div>
  );
};

export default Estoque;
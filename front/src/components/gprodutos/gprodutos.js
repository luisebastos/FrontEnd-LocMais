import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const GProdutos = () => {
  return (
    <div className="gprodutos-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="gprodutos-content">
        {/* conteudo pagina grupo de produtos */}
      </div>
    </div>
  );
};

export default GProdutos;
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Produtos = () => {
  return (
    <div className="produtos-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="produtos-content">
        {/* conteudo pagina produtos */}
      </div>
    </div>
  );
};

export default Produtos;
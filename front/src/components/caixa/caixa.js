import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Caixa = () => {
  return (
    <div className="caixa-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="caixa-content">
        {/* conteudo pagina caixa */}
      </div>
    </div>
  );
};

export default Caixa;
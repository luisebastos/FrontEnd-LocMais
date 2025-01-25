import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Configuracoes = () => {
  return (
    <div className="configuracoes-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="configuracoes-content">
        {/* conteudo pagina Home */}
      </div>
    </div>
  );
};

export default Configuracoes;
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Acesso = () => {
  return (
    <div className="acesso-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="acesso-content">
        {/* conteudo pagina acesso */}
      </div>
    </div>
  );
};

export default Acesso;
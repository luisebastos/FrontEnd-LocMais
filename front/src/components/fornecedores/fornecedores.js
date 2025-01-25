import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Fornecedores = () => {
  return (
    <div className="fornecedores-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="fornecedores-content">
        {/* conteudo pagina Home */}
      </div>
    </div>
  );
};

export default Fornecedores;
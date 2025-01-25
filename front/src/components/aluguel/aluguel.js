import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Aluguel = () => {
  return (
    <div className="aluguel-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="aluguel-content">
        {/* conteudo pagina aluguel */}
      </div>
    </div>
  );
};

export default Aluguel;

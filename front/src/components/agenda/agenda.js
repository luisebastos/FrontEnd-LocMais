import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Agenda = () => {
  return (
    <div className="agenda-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="agenda-content">
        {/* conteudo pagina acesso */}
      </div>
    </div>
  );
};

export default Agenda;
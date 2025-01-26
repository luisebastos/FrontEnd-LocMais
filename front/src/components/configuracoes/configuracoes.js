import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './configuracoes.css'; 

const Configuracoes = () => {
  return (
    <div className="configuracoes-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="configuracoes-content">
            <h2 className="configuracoes-message">Configurações</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;
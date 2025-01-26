import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './orcamentos.css'; // Certifique-se que o caminho está correto

const Orcamentos = () => {
  return (
    <div className="orcamentos-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="orcamentos-content">
            <h2 className="welcome-message">Orçamentos</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orcamentos;

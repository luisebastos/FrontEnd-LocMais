import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './gprodutos.css'; 

const GProdutos = () => {
  return (
    <div className="gprodutos-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="gprodutos-content">
            <h2 className="gprodutos-message">Grupo de Produtos</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GProdutos;
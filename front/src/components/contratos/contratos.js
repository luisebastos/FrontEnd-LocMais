import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './contratos.css'; 

const Contratos = () => {
  return (
    <div className="contratos-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="contratos-content">
            <h2 className="contratos-message">Contratos</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contratos;
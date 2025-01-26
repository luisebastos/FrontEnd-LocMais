import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './clientes.css'; 

const Clientes = () => {
  return (
    <div className="clientes-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="clientes-content">
            <h2 className="clientes-message">Clientes</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
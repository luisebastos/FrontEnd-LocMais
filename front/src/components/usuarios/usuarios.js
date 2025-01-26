import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './usuarios.css'; 

const Usuarios = () => {
  return (
    <div className="usuarios-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="usuarios-content">
            <h2 className="usuarios-message">Usuários</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
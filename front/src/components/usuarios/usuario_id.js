import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './usuario_id.css'; 

const Usuario_id = () => {
  return (
    <div className="usuarioid-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="usuarioid-content">
            <h2 className="usuarioid-message">Usuario_id</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuario_id;
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './acesso.css'; 

const Acesso = () => {
  return (
    <div className="acesso-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="acesso-content">
            <h2 className="acesso-message">Acesso</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acesso;
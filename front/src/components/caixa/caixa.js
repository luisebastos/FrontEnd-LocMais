import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './caixa.css'; 

const Caixa = () => {
  return (
    <div className="caixa-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="caixa-content">
            <h2 className="caixa-message">Caixa</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caixa;
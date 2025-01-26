import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './estoque.css'; 

const Estoque = () => {
  return (
    <div className="estoque-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="estoque-content">
            <h2 className="estoque-message">Estoque</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estoque;
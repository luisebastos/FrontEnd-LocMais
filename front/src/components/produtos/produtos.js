import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './produtos.css'; 

const Produtos = () => {
  return (
    <div className="produtos-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="produtos-content">
            <h2 className="produtos-message">Produtos</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
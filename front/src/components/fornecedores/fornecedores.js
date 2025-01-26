import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './fornecedores.css'; 

const Fornecedores = () => {
  return (
    <div className="fornecedores-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="fornecedores-content">
            <h2 className="fornecedores-message">Fornecedores</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fornecedores;
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './aluguel.css'; 

const Aluguel = () => {
  return (
    <div className="aluguel-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="aluguel-content">
            <h2 className="aluguel-message">Aluguel</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aluguel;
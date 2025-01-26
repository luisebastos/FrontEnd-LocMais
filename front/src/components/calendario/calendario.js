import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './calendario.css'; 

const Calendario = () => {
  return (
    <div className="calendario-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="calendario-content">
            <h2 className="calendario-message">Calendário</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './agenda.css'; 

const Agenda = () => {
  return (
    <div className="agenda-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="agenda-content">
            <h2 className="agenda-message">Agenda dos Funcionários</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
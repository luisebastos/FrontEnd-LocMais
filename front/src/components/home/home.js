import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './home.css'; // Certifique-se que o caminho está correto

const Home = () => {
  return (
    <div className="home-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="home-content">
            <h2 className="welcome-message">Bem vindo, Administrador!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import Sidebar from '../sidebar/sidebar'; 

const Home = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="home-content">
        {/* ALUGUEIS A VENCES AQUI */}
        <h1>Bem-vindo à Home Page</h1>
      </div>
    </div>
  );
};

export default Home;



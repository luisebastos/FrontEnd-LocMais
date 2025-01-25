import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Home = () => {
  return (
    <div className="home-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="home-content">
        {/* conteudo pagina Home */}
      </div>
    </div>
  );
};

export default Home;



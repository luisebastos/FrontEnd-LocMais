import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar'; 

const Analytics = () => {
  return (
    <div className="analytics-page">
      <Topbar /> 
      <Sidebar /> 
      <div className="analytics-content">
        {/* conteudo pagina analytics */}
      </div>
    </div>
  );
};

export default Analytics;


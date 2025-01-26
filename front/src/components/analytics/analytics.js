import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar/topbar';
import './analytics.css'; 

const Analytics = () => {
  return (
    <div className="analytics-page">
      <Topbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-container">
          <div className="analytics-content">
            <h2 className="analytics-message">Analytics</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;


import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onClick, shadow, fullSize }) => {
  return (
    <div
      className={`dashboard ${shadow ? 'dashboard-shadow' : ''} ${
        fullSize ? 'dashboard-full' : ''
      }`}
      onClick={onClick}
    >
      {/* Add dashboard content here */}
    </div>
  );
};

export default Dashboard;

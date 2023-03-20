// Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onClick, onOutsideClick, shadow, fullSize }) => {
  return (
    <div
      className={`dashboard ${shadow ? 'dashboard-shadow' : ''} ${
        fullSize ? 'dashboard-full' : ''
      }`}
      onClick={shadow ? onOutsideClick : onClick}
    >
    </div>
  );
};

export default Dashboard;

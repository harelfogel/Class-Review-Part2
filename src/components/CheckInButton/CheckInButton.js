// components/CheckInButton/CheckInButton.js

import React from 'react';
import './CheckInButton.css';

const CheckInButton = ({ isCheckedIn }) => {
  const buttonClass = isCheckedIn ? 'checked' : 'not-checked';

  return (
    <button className={`check-in-button ${buttonClass}`}>
      {isCheckedIn ? 'Checked' : 'Check in'}
    </button>
  );
};

export default CheckInButton;

import React, { useState } from 'react';
import './CheckInButton.css';

const CheckInButton = ({ isCheckedIn }) => {
  const [checkedIn, setCheckedIn] = useState(isCheckedIn);
  const buttonClass = checkedIn ? 'checked' : 'not-checked';

  const handleClick = () => {
    setCheckedIn(!checkedIn);
  };

  return (
    <button className={`check-in-button ${buttonClass}`} onClick={handleClick}>
      {checkedIn ? 'Checked' : 'Check in'}
    </button>
  );
};

export default CheckInButton;

import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarClick = () => {
    setShowSidebar(!showSidebar);
  };

  const handleOutsideClick = () => {
    setShowSidebar(false);
  };

  return (
    <div className="App">
      <Dashboard
        shadow={showSidebar}
        onClick={handleSidebarClick}
        fullSize={!showSidebar}
        onOutsideClick={handleOutsideClick}
      />
       {showSidebar && <Sidebar onClick={handleSidebarClick} />}
    </div>
  );
}

export default App;

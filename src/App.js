import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="App">
      <Dashboard
        shadow={showSidebar}
        onClick={showSidebar ? null : handleSidebarClick}
        fullSize={!showSidebar}
      />
      {showSidebar && <Sidebar onClick={handleSidebarClick} />}
    </div>
  );
}

export default App;

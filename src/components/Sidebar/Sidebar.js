import React, { useState } from 'react';
import './Sidebar.css';
import Pencil from '../../assets/images/Pencil.png';
import CalendarDelete from '../../assets/images/CalendarDelete.png';
import Elipse from '../../assets/images/Ellipse.png';
import Barbell from '../../assets/images/Barbell.png';
import PersonalTrainer from '../../assets/images/PersonalTrainer.png';
import Clock from '../../assets/images/Clock.png';
import FullTank from '../../assets/images/FullTank.png';
import Plus from '../../assets/images/Plus.png';
import clientsData from '../../data/clientData';
import ClientsTable from '../ClientsTable/ClientsTable';
import SuggestionsList from '../SuggestionsList/SuggestionsList';



const Sidebar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const [clients, setClients] = useState(clientsData);

  const toggleCheckInStatus = (id) => {
    const updatedClients = clients.map((client) =>
      client.id === id ? { ...client, checkedIn: !client.checkedIn } : client
    );
    setClients(updatedClients);
  };

  const removeClient = (id) => {
    const clientsAfterRemoval = clients.filter((client) => client.id !== id);
    setClients(clientsAfterRemoval);
  }

  const handleSuggestionClick = (suggestion) => {
    const updatedClients = clients.map((client) =>
      client.id === suggestion.id
        ? { ...client, inCurrentClass: true }
        : client
    );
    setClients(updatedClients);
    setSearchQuery('');
    setSuggestions([]);
  };


  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredClients = clientsData.filter((client) =>
        client.name.toLowerCase().startsWith(query.toLowerCase())
      );
      setSuggestions(filteredClients);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div  className={`sidebar ${props.visible ? 'sidebar-visible' : ''}`} >
      <div className="sidebar-section">
        <div className="section-container">
          <img className="pencil-icon" src={Pencil} alt="Pencil icon" />
          <span className="edit-text">Edit</span>
          <img className="calendar-delete-icon" src={CalendarDelete} alt="Calendar Delete icon" />
          <span className="cancel-class-text">Cancel Class</span>
        </div>
        <div className="elipse-container">
          <img className="elipse-icon" src={Elipse} alt="Elipse icon" />
          <img className="barbell-icon" src={Barbell} alt="Barbell icon" />
          <h3 className="workout-headline">Workout of the day</h3>
        </div>
      </div>
      <div className="sidebar-section">
        <div className="column left-column">
          <img className="personal-trainer" src={PersonalTrainer} alt="Personal Trainer" />
          <span className="trainer-name">Tom A</span>
          <span className="trainer-title">Coach</span>
        </div>
        <div className="column middle-column">
          <img className="clock" src={Clock} alt="Clock" />
          <span className="start-time">16:15</span>
          <span className="start-time-label">Start Time</span>
        </div>
        <div className="column right-column">
          <img className="full-tank" src={FullTank} alt="Full Tank" />
          <span className="participants">3/15</span>
          <span className="participants-label">Participants</span>
        </div>
      </div>
      <div className="sidebar-section">
        <div className="you-should-know-container">
          <h3 className="you-should-know">You Should Know...</h3>
          <span className="debt-info">
            Dagan & Eden which participates in the class have a debt
          </span>
        </div>
      </div>
      <div className="sidebar-section">
        <h2 className="participants-header">Participants</h2>
        <div className="search-wrapper">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Add client"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className="plus-icon-container">
              <img src={Plus} alt="Add Client" className="plus-icon" />
            </div>
          </div>
          <SuggestionsList suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
        </div>
        <ClientsTable clients={clients} toggleCheckInStatus={toggleCheckInStatus} removeClient={removeClient} />

      </div>
    </div>
  );
};

export default Sidebar;

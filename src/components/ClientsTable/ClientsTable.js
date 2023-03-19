// ClientsTable.js

import React from 'react';
import './ClientsTable.css';
import CheckInButton from '../CheckInButton/CheckInButton'; // Add this import statement


const ClientsTable = ({ clients }) => {
  return (
    <div className="clients-table">
      {clients.map(client => (
        <div key={client.id} className="client-row">
          <img src={client.image} alt={client.name} />
          <span>{client.name}</span>
          <CheckInButton checkedIn={client.checkedIn} />
        </div>
      ))}
    </div>
  );
};

export default ClientsTable;

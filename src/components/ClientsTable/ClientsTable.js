// ClientsTable.js

import React from 'react';
import './ClientsTable.css';
import clientsData from '../../data/clientData';
import CheckInButton from '../CheckInButton/CheckInButton';
import WhatsAppIcon from '../../assets/images/Whatapp.png';
import TrashIcon from '../../assets/images/Trash.png';

const ClientsTable = () => {
  return (
    <div className="table-wrapper">
      <table className="clients-table">
        {clientsData.map((client) => (
          <tr className="client-row" key={client.id}>
            <td className="client-image-container">
              <img src={client.image} alt={client.name} className="client-image" />
            </td>
            <td className="client-name">{client.name}</td>
            <td className="check-in-button-container">
              <CheckInButton isCheckedIn={client.checkedIn} />
            </td>
            <td className="whatsapp-icon-container">
              <img src={WhatsAppIcon} alt="WhatsApp" className="whatsapp-icon" />
            </td>
            <td className="trash-icon-container">
              <img src={TrashIcon} alt="Trash" className="trash-icon" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ClientsTable;

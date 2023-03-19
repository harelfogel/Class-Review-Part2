// ClientsTable.js

import React,{useState} from 'react';
import './ClientsTable.css';
import clientsData from '../../data/clientData';
import CheckInButton from '../CheckInButton/CheckInButton';
import WhatsAppIcon from '../../assets/images/Whatapp.png';
import TrashIcon from '../../assets/images/Trash.png';


const ClientsTable = () => {

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
  

  return (
    <div className="table-wrapper">
      <table className="clients-table">
        {clients.map((client) => (
          <tr className="client-row" key={client.id}>
            <td className="client-image-container">
              <img src={client.image} alt={client.name} className="client-image" />
            </td>
            <td className="client-name">{client.name}</td>
            <td className="check-in-button-container">
              <CheckInButton isCheckedIn={client.checkedIn}  onClick={() => toggleCheckInStatus(client.id)} />
            </td>
            <td className="whatsapp-icon-container">
              <img src={WhatsAppIcon} alt="WhatsApp" className="whatsapp-icon" />
            </td>
            <td className="trash-icon-container">
              <img src={TrashIcon} alt="Trash" className="trash-icon" onClick={()=>removeClient(client.id)} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ClientsTable;

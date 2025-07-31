import './App.css';
import axios from 'axios';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import React, { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get('https://jubilant-umbrella-xx4w7jr7v4q2p9qg-5001.app.github.dev/api/contacts');
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <ContactForm onContactAdded={fetchContacts} />
      <ContactList contacts={contacts} onContactChanged={fetchContacts} />
    </div>
  );
}

export default App;
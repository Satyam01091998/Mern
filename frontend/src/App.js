import './App.css';
import axios from 'axios';
import ContactList from './components/contactList';
import ContactForm from './components/contactForm';
import React, { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get(`https://humble-halibut-rrx5r569p5wh9q9-5001.app.github.dev/api/contacts`);
    console.log(res.data);
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h1>Contact Manager in App</h1>
      <ContactForm onContactAdded={fetchContacts} />
      <ContactList contacts={contacts} onContactChanged={fetchContacts} />
    </div>
  );
}

export default App;
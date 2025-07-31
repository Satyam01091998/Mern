import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, onContactChanged }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact._id}
          contact={contact}
          onContactChanged={onContactChanged}
        />
      ))}
    </ul>
  );
}

export default ContactList;

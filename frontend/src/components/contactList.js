import React from 'react';
import ContactItem from './contactItem';

function ContactList({ contacts, onContactChanged }) {
  return (
    <ul>
      <li>
      {Array.isArray(contacts) && contacts.map(contact => (
        <ContactItem
          key={contact._id}
          contact={contact}
          onContactChanged={onContactChanged}
        />
      ))}
      </li>
    </ul>
  );
}

export default ContactList;
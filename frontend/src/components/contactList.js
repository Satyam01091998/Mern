import React from "react";
import contactItem from "./ContactItem";

function ContactList({ contacts, onContactChanged }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <contactItem 
          key={contact._id} 
          contact={contact} 
          onContactChanged={onContactChanged} 
        />
      ))}
    </ul>
  );
}

export default ContactList;
import react from "react";
import axios from "axios";

function contactIem({ contact, onContactChanged }) {
  const handleDelete = async () => {
    await axios.delete(`https://humble-halibut-rrx5r569p5wh9q9-5000.app.github.dev/api/contacts/${contact._id }`);
    onContactChanged();
    };         



return (
  <li>
    {contact.name} - {contact.email} - {contact.phone}
    <button onClick={handleDelete}>Delete</button>  
  </li>
    );
};

export default contactIem;

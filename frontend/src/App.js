import React, { use } from "react"; 
import axios from "axios"; 
import ReactDOM from "react-dom/client";
import { set } from "mongoose";

import contactList from "./components/ContactList";
import contactForm from "./components/ContactForm";

function App() {
  const [input,setInput] = React.useState("");
  const [data,setData] = React.useState([]);
  const [error,setError] = React.useState("");

  const fetchContacts = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.get('https://humble-halibut-rrx5r569p5wh9q9-5000.app.github.dev/api/contacts');
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err);
    }   
  };


useEffect(() => {
  fetchContacts();
}, []); 

return (
  <div className = "container">
    <h1>Contact List</h1>
    <contactForm onContactAdded={fetchContacts} />
    <contactList contacts={contacts} oncontactChanged = {fetchContacts}  />
    </div>
);
}

export default App;


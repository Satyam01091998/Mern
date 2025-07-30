import React, { use } from "react";  
import ReactDOM from "react-dom/client";
import App from "./App";
import { set } from "mongoose";

import contactList from "./components/ContactList";
import contactForm from "./components/ContactForm";

function App() {
  const [input,setInput] = React.useState("");
  const [data,setData] = React.useState([]);
  const [error,setError] = React.useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
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


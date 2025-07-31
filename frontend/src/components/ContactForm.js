import React, { useState } from 'react';
import axios from 'axios';

function ContactForm({ onContactAdded }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('https://jubilant-umbrella-xx4w7jr7v4q2p9qg-5001.app.github.dev/api/contacts', form);
    setForm({ name: '', email: '', phone: '' });
    onContactAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
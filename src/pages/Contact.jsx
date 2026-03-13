import React, { useState } from 'react';
import '../Contact.css'; 

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', date: '', people: '' });
  const [msg, setMsg] = useState('');

  function change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const j = await res.json();
      setMsg(j.message || 'Saved');
      setForm({ name: '', email: '', date: '', people: '' });
    } catch (err) {
      console.error(err);
      setMsg('Error sending.');
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Contact & Reservations</h2>
        <form onSubmit={submit} className="contact-form">
          <label>Name</label>
          <input name="name" value={form.name} onChange={change} required />

          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={change} required />

          <label>Date & Time</label>
         <input name="date" type="datetime-local" value={form.date} onChange={change} placeholder='DD-MM-YYYY HH:MM' />

          <label>People</label>
          <input name="people" value={form.people} onChange={change} type="number" min={1} max={20}/>

          <button className="btn">Send</button>
        </form>
        {msg && <p className="note">{msg}</p>}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import './Contact.css';
function ContactForm() {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
  });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      // Validate the email
      if (!isValidEmail(formData.email)) {
          alert("Invalid email address!");
          return;
      }
      //Check for name
      if (!formData.name) {
          alert("Please enter your name!");
          return;
      }
      //Check for message
      if (!formData.message) {
          alert("Please enter a message!");
          return;
      }

      

      console.log("Form data submitted:", formData);
  };

  return (
    <div className="contactContainer" >
      <h1 className="contact">Contact Me!</h1>
      <form onSubmit={handleSubmit} className="contact-form">
          <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Name" 
              required 
          />
          <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email" 
              required 
          />
          <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Message" 
              required 
          />
          <button type="submit">Submit</button>
      </form></div>
  );
}

// Email validation using Regex
function isValidEmail(email) {
  
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}
export default ContactForm;
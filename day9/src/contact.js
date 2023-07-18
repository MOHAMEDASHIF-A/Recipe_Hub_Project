import React from 'react';
import './contact.css';
import Navbar from './navbar';

const ContactPage = () => {
  return (
    <div className="seven1">
    <Navbar/>
    <br/><br/><br/><br/>
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Whether you have a question, suggestion, or just 
        want to say hello, feel free to reach out to us.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default ContactPage;

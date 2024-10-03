// src/components/Contact.js
import React from 'react';
import contact from '../images/contact.jpg';
import Navbar from './Navbar';
const Contact = () => {
  // Inline styles for the contact container
  const contactStyle = {
    backgroundImage: `url(${contact})`, // Adjust the image path
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the image
    padding: '50px', // Add some padding
    color: 'white', // Change text color for better visibility
    height: '100vh', // Make it full height of the viewport
    display: '', // Use flexbox for centering
    flexDirection: 'column', // Align items vertically
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  };

  return (<><Navbar />
    <div style={contactStyle}>
      <h1>Contact Us</h1>
      <p>Email: support@placementportal.com | Phone: +123-456-7890</p>
    </div>
    </>
  );
};

export default Contact;

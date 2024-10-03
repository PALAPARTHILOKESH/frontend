// src/components/About.js
import React from 'react';
import about from '../images/about.jpg'; // Adjust the path to your image
import a3 from '../images/a3.jpeg'; // Path for the first card image
import a2 from '../images/a2.jpeg'; // Path for the second card image
import a1 from '../images/a1.jpeg'; // Path for the third card image4
import Navbar from './Navbar';

const About = () => {
  const aboutStyle = {
    backgroundImage: `url(${about})`, // Use imported image
    backgroundSize: 'cover', // Ensures the image covers the whole background
    backgroundPosition: 'center', // Centers the image
    padding: '10px', // Adjust padding as needed
    color: 'white', // Text color for contrast
    height: '80vh', // Full viewport height
    display: 'flex', // Use flexbox for alignment
    flexDirection: 'column', // Align items vertically
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around', // Space between cards
    marginTop: '20px', // Space above the cards
    width: '100%', // Full width for the container
  };

  const cardStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for cards
    borderRadius: '10px', // Rounded corners
    padding: '20px', // Internal padding for the card
    textAlign: 'center', // Center the text inside the card
    width: '20%', // Adjusted width of each card
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items in card
  };

  const imageStyle = {
    width: '120px', // Set width of the circular image
    height: '120px', // Set height of the circular image
    borderRadius: '50%', // Make the image circular
    objectFit: 'cover', // Ensure the image covers the circular area
    marginBottom: '10px', // Space between image and text
  };

  return (<><Navbar />
    <div style={aboutStyle}>
      <h1>About Us</h1>
      <p>We provide a centralized platform for campus recruitment...</p>
      <p>
        Our journey began with a simple idea: to bridge the gap between students and employers. 
        Recognizing the challenges faced by both parties in the traditional recruitment process, 
        we aimed to create a platform that streamlines the connection. 
        With a focus on providing resources, guidance, and networking opportunities, we empower students 
        to excel in their career paths while offering employers access to a pool of talented candidates. 
        Our mission is to foster meaningful employment relationships and facilitate successful placements.
      </p>
      
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <img src={a3} alt="Admin 1" style={imageStyle} />
          <h3>Admin 1</h3>
          <p>Lokesh<br/>lokesh@gmail.com<br/>+9632587418</p>
        </div>

        <div style={cardStyle}>
          <img src={a1} alt="Admin 2" style={imageStyle} />
          <h3>Admin 2</h3>
          <p>Md Fazal<br/>fazal@gmail.com<br/>+6987452130</p>
        </div>

        <div style={cardStyle}>
          <img src={a2} alt="Admin 3" style={imageStyle} />
          <h3>Admin 3</h3>
          <p>Pavan<br/>pavan@gmail.com<br/>+8521452130</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;

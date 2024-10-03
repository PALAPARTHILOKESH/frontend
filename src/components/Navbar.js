// src/components/Navbar.js
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import navpic from '../images/navpic.jpg'; 
 // Ensure the logo image is in the same directory

const styles = {
  navbar: {
    backgroundColor: 'grey', // Set your desired background color
  },
  logo: {
    height: '60px', 
    marginRight: '10px',
  },
  logoText: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    fontSize: '16px',
    marginLeft: '10px',
  },
  spacer: {
    flexGrow: 1,
  },
};

export default function Navbar() {
  return (
    <AppBar position="static" style={styles.navbar}>
      <Toolbar>
        <div style={styles.logoText}>
          <img src={navpic} alt="Logo" style={styles.logo} />
          <Typography variant="h2">KLU</Typography>
        </div>
        <div style={styles.spacer} />
        <Button color="inherit" component={Link} to="/home" style={styles.button}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/login" style={styles.button}>
          Login
        </Button>
        <Button color="inherit" component={Link} to="/register" style={styles.button}>
          Register
        </Button>
        <Button color="inherit" component={Link} to="/about" style={styles.button}>
          About Us
        </Button>
        <Button color="inherit" component={Link} to="/contact" style={styles.button}>
          Contact Us
        </Button>
        {/* Add more buttons here as needed */}
      </Toolbar>
    </AppBar>
  );
}

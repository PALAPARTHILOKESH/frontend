import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/od.jpg'; // Import the background image
import HeaderNavbar from './HeaderNavbar';

const OfficerDashboard = () => {
  const styles = {
    dashboardContainer: {
      backgroundImage: `url(${backgroundImage})`, // Use the imported image here
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: '20px',
    },
    title: {
      marginBottom: '40px',
    },
    cardsContainer: {
      display: 'flex',
      gap: '20px',
    },
    card: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      padding: '20px',
      borderRadius: '10px',
      width: '200px',
      textAlign: 'center',
      textDecoration: 'none',
      color: 'white',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s',
    },
  };

  return (<><HeaderNavbar/>
    <div style={styles.dashboardContainer}>
      <h1 style={styles.title}>Placement Officer Dashboard</h1>
      <div style={styles.cardsContainer}>
        <Link
          to="/organize-placement-drives"
          style={styles.card}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3>Organize Placement Drives</h3>
        </Link>
        <Link
          to="/monitor-student-progress"
          style={styles.card}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3>Monitor Student Progress</h3>
        </Link>
        <Link
          to="/coordinate-with-companies"
          style={styles.card}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3>Coordinate with Companies</h3>
        </Link>
      </div>
    </div>
    </>
  );
};

export default OfficerDashboard;

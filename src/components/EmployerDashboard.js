import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/ed.jpg'; // Import the background image
import HeaderNavbar from './HeaderNavbar';
const EmployerDashboard = () => {
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
      <h1 style={styles.title}>Company Dashboard</h1>
      <div style={styles.cardsContainer}>
        <Link
          to="/post-job-openings"
          style={styles.card}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3>Post Job Openings</h3>
        </Link>
        <Link
          to="/review-applications"
          style={styles.card}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3>Review Applications</h3>
        </Link>
        <Link
          to="/schedule-interviews"
          style={styles.card}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3>Schedule Interviews</h3>
        </Link>
      </div>
    </div>
    </>
  );
};

export default EmployerDashboard;

import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/sd.jpg'; // Import the background image

const StudentDashboard = () => {
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

  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.title}>Student Dashboard</h1>
      <div style={styles.cardsContainer}>
        <Link
          to="/view-job-postings"
          style={styles.card}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3>View Job Postings</h3>
        </Link>
        <Link
          to="/apply-for-jobs"
          style={styles.card}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3>Apply for Jobs</h3>
        </Link>
        <Link
          to="/track-application-status"
          style={styles.card}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3>Track Application Status</h3>
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboard;

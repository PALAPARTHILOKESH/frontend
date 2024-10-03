// src/pages/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Create this CSS file for styling
import adminImage from '../images/admin.jpg'; // Add your image paths
import studentImage from '../images/student.jpg';
import employerImage from '../images/employer.jpg';
import officerImage from '../images/officer.jpg';
import Navbar from '../components/Navbar';
const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    navigate(`/${role}`);
  };

  return (<><Navbar />
    <div className="login-container">
      <h1>Placement Portal</h1>
      <div className="card-container">
        <div className="card" onClick={() => handleLogin('admin')}>
          <img src={adminImage} alt="Admin" />
          <h2>Admin</h2>
          <p>Manage the platform and oversee user activities.</p>
          <button>Login as Admin</button>
        </div>
        <div className="card" onClick={() => handleLogin('student')}>
          <img src={studentImage} alt="Student" />
          <h2>Student</h2>
          <p>Apply for jobs and track your application status.</p>
          <button>Login as Student</button>
        </div>
        <div className="card" onClick={() => handleLogin('employer')}>
          <img src={employerImage} alt="Employer" />
          <h2>Employer</h2>
          <p>Post job openings and manage candidate applications.</p>
          <button>Login as Employer</button>
        </div>
        <div className="card" onClick={() => handleLogin('officer')}>
          <img src={officerImage} alt="Officer" />
          <h2>Placement Officer</h2>
          <p>Facilitate placements and coordinate between students and employers.</p>
          <button>Login as Officer</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;

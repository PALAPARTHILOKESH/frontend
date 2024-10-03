// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import OfficerDashboard from './components/OfficerDashboard';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the Footer
import HomePage from './pages/HomePage';
import Jobs from './components/Jobs';
import Companies from './components/Companies';
import Register from './components/Register';
import Index from './components/Index';
import Applied from './components/Applied';
function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ flex: 1 }}> {/* This will allow the content to take up the remaining space */}
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/admin" element={<AdminDashboard />} />
            {/* <Route path="/student" element={<StudentDashboard />} /> */}
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/officer" element={<OfficerDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/register" element={<Register />} />
            <Route path="/student" element={<Index />} />
            <Route path='/applied' element={<Applied/>}/>

          </Routes>
        </div>
        <Footer /> {/* Include the Footer */}
      </div>
    </Router>
  );
}

export default App;

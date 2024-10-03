import React from 'react';
import Header from './Header';
import '../styles/Header.css';
import '../styles/Index1.css';  
const Index = () => {
  return (
    <>
      <Header />
      <div className="index-container">
        <h1>Welcome to Our Job Portal</h1>
        <p>Find your dream job from top companies in the industry.</p>
        <a href="/jobs" className="explore-btn">Explore Jobs</a>
      </div>
    </>
  );
};

export default Index;

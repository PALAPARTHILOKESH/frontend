import React from 'react';
import '../styles/Header.css';
const Header = () => {
  return (<>
    <header className="header1">
      <h1>Placement Tracking System</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/companies">Companies</a></li>
          <li><a href="/applied">Applied</a></li>
          <li><a href="/">Logout</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;

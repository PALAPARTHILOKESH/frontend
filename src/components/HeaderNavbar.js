import React from 'react';
import '../styles/Header.css';
const HeaderNavbar = () => {
  return (<>
    <header className="header1">
      <h1>Placement Tracking System</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Logout</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default HeaderNavbar;

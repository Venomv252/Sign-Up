import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div style={{ width: '100%' }}> 
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="logo">
            <a href="https://homepage-one-lyart.vercel.app/"><span className="blue">Edu</span><span className="green">Connect</span></a>
          </h1>
          <p className="tagline">Learn. Grow. Succeed.</p>
        </div>
        <div className="navbar-right">
          <a href="" className="nav-link">Leaderboard</a>
          <a href="">
            <button className="login-button">Login/Signup</button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
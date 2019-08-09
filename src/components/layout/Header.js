import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">Logo</Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">Add Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;

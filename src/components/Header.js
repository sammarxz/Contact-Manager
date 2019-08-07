import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">Logo</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;

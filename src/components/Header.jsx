import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1 className="logo-text font-cormorant font-bold text-white">Saqlain</h1>
            <h1 className="logo-text font-cormorant font-bold text-white">Sheikh</h1>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#resume" className="nav-link font-prata">resume</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link font-prata">contact</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link font-prata">about</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

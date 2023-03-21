import React, { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-menu-button" onClick={toggleMenu}>
        <span className="hamburger-menu-icon"></span>
      </button>
      <div className={`hamburger-menu-dropdown ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/blitzscaling" target="_parent" className="link">
              Blitzscaling
            </Link>
          </li>
          <li>
            <Link to="/despre" target="_parent" className="link">
              Mediul de afaceri din Romania
            </Link>
          </li>
          <li>
            <Link to="/#exemple" target="_parent" className="link">
              Exemple de afaceri
            </Link>
          </li>
          <li>
            <Link to="/noutati" target="_parent" className="link">
              Noutati
            </Link>
          </li>
          <Link to="/joc" target="_parent" className="nav-buttons">
            <img
              alt="gamepad"
              src="/assets/gamepad.svg"
              className="game-button"
            />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;

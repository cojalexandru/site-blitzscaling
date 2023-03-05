import { Link } from "react-router-dom";
import React from "react";
import companiesData from "../assets/companies.json";

export const Header = () => {
  const logo = "/assets/blitzscaling-logo.svg";
  const companies = companiesData;
  return (
    <>
      <div className="header">
        <div className="nav">
          <div className="navbar">
            <img alt="logo" src={logo} className="logo" />
            <div className="nav-links">
              <div className="nav-link">
                <Link to="/" target="_parent" className="link">
                  Acasa
                </Link>
              </div>
              <div className="nav-link">
                <Link to="/#exemple" target="_parent" className="link">
                  Exemple
                </Link>
              </div>
              <div className="nav-link">
                <Link to="/despre" target="_parent" className="link">
                  Despre
                </Link>
              </div>
            </div>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            className="nav-buttons"
          >
            <img
              alt="gamepad"
              src="/assets/gamepad.svg"
              className="game-button"
            />
          </a>
        </div>
      </div>
    </>
  );
};

import { Link } from "react-router-dom";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";

import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const logo = "/assets/blitzscaling-logo.svg";
  const isMobile = useMediaQuery({ query: `(max-width: 1515px)` });

  return (
    <>
      <div className="header">
        <div className="nav">
          <div className="navbar">
            <Link to="/" target="_parent" className="link">
              <img alt="logo" src={logo} className="logo" />
            </Link>
            <HamburgerMenu />
            {!isMobile && (
              <div className="nav-links">
                <div className="nav-link">
                  <Link to="/blitzscaling" target="_parent" className="link">
                    Blitzscaling
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="/mediul_de_afaceri_din_romania"
                    target="_parent"
                    className="link"
                  >
                    Mediul de afaceri din Romania
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="/#exemple" target="_parent" className="link">
                    Exemple de afaceri
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="/noutati" target="_parent" className="link">
                    Noutati
                  </Link>
                </div>
              </div>
            )}
          </div>
          {!isMobile && (
            <Link to="/joc" target="_parent" className="nav-buttons">
              <img
                alt="gamepad"
                src="/assets/gamepad.svg"
                className="game-button"
              />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

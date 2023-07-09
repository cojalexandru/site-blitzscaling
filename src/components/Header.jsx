import { Link } from "react-router-dom";
import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useMediaQuery } from "react-responsive";
import SearchBar from "./SearchBar";

export const Header = () => {
  const logo = "/assets/blitzscaling-logo.svg";
  const isMobile = useMediaQuery({ query: `(max-width: 1400px)` });

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
                    Mediul de Afaceri
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
            <div className="nav-buttons">
              <SearchBar></SearchBar>
              <Link to="/joc" target="_parent" className="nav-button">
                <img
                  alt="gamepad"
                  src="/assets/gamepad.svg"
                  className="game-button"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

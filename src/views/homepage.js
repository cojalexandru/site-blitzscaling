import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./views.css";
import { Footer } from "../components/Footer";
import Examples from "../components/Examples";
import { Header } from "../components/Header";

function Homepage() {
  return (
    <div className="container">
      <Helmet>
        <title>Blitzscaling - Homepage</title>
      </Helmet>
      <div className="about">
        <div className="home">
          <Header></Header>
          <div className="homepage">
            <div className="about-container">
              <div className="info-container">
                <button className="info">
                  <div className="icon-text">
                    <span className="text-header">
                      De ce ar trebui să înveți despre &quot;Blitzscaling&quot;?
                    </span>
                  </div>
                  <div className="info-container">
                    <div className="icon-text">
                      <span className="text-paragraph">
                        <span>
                          Deoarece chiar funcționează, mai jos ai niște exemple
                          iar daca dai pe butonul de dedesupt sau
                        </span>
                        <br />
                        <span>
                          pe cel &quot;Despre&quot; de sus vei afla mai multe
                          despre &quot;Blitzscaling&quot;.
                        </span>
                        <br />
                      </span>
                    </div>
                  </div>
                </button>
                <button className="buttons">
                  <Link to="/" className="about-button">
                    <span>Despre</span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="image">
              <img src="/assets/stocks-rising-600h.jpg" alt="image" />
            </div>
          </div>
        </div>
        <Examples></Examples>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Homepage;

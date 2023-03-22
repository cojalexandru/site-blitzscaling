import React from "react";
import { Helmet } from "react-helmet";
import "./views.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Examples from "../components/Examples";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Helmet>
        <title>Blitzscaling - Homepage</title>
      </Helmet>
      <Header />
      <div className="homepage-container">
        <div className="homepage-content">
          <h2 className="homepage-title">
            Mediul de afaceri din Romania si Blitzscaling
          </h2>
          <p className="homepage-text">
            Consolidarea mediului de afaceri, asigurarea stabilității și
            predictibilității acestuia, precum și creșterea competitivității
            prin inovație reprezintă liniile directoare principale ale politicii
            economice a Guvernului României. <br></br>
            Se urmărește ca modalitatea principală de creștere a
            competitivității să fie majorarea productivității bazată pe
            diversificarea și inovarea bazei industriale interne.
            <br></br>
            Prioritățile executivului au în atenție îmbunătățirea mediului
            concurențial și a climatului de afaceri, în principal prin întărirea
            politicii din domeniul ajutorului de stat și a măsurilor pentru mai
            bună reglementare care să ducă la reducerea poverii administrative
            asupra companiilor, precum și creșterea transparenței decizionale și
            consultarea publică. Totodată, se are în vedere susținerea
            întreprinzătorilor privați, stimularea liberei inițiative și
            combaterea șomajului.
          </p>
          <div className="homepage-buttons-container">
            <Link
              to="/mediul_de_afaceri_din_romania"
              target=""
              className="homepage-button"
            >
              Mediul de Afaceri din Romania
            </Link>
            <Link to="/blitzscaling" target="" className="homepage-button">
              Blitzscaling
            </Link>
          </div>
        </div>
        <div
          className="homepage-image"
          style={{ backgroundImage: `url(/assets/stocks-2.png)` }}
        ></div>
      </div>
      <Examples />
      <Footer />
    </div>
  );
}

export default Homepage;

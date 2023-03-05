import React from "react";
import { Helmet } from "react-helmet";
import "./views.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function Example(props) {
  const { company, img } = props;

  return (
    <div className="container">
      <Helmet>
        <title>Blitzscaling - {company}</title>
      </Helmet>
      <div className="about">
        <Header />
        <div className="homepage">
          <div className="about-container">
            <div className="info-container">
              <button className="info">
                <div className="icon-text">
                  <span className="text-header">Amazon is a real company</span>
                </div>
                <div className="info-container">
                  <div className="icon-text1"></div>
                </div>
              </button>
            </div>
          </div>
          <div className="image">
            <img src={img} alt="image" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Example;

import React from "react";
import { Helmet } from "react-helmet";
import "./views.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Quiz from "../components/Quiz";

function Game() {
  return (
    <div>
      <Helmet>
        <title>Blitzscaling - Despre</title>
      </Helmet>
      <Header />
      <div className="quizzes-container">
        <Quiz type="TrueFalse" />
        <Quiz />
      </div>
      <Footer />
    </div>
  );
}

export default Game;

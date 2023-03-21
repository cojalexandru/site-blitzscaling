import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style.css";
import Homepage from "./views/homepage";
import About from "./views/about";
import News from "./views/news";
import Game from "./views/game";
import Blitzscaling from "./views/blitzscaling";

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Homepage} exact path="/" />
        <Route path="/mediul_de_afaceri_din_romania">
          <About />
        </Route>
        <Route path="/noutati">
          <News />
        </Route>
        <Route path="/joc">
          <Game />
        </Route>
        <Route path="/blitzscaling">
          <Blitzscaling />
        </Route>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

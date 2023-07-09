import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style.css";
import Homepage from "./views/homepage";
import MDA_Ro from "./views/mda_ro";
import News from "./views/news";
import Game from "./views/game";
import Blitzscaling from "./views/blitzscaling";
import Example from "./views/example";

const App = () => {
  const [examples, setExamples] = useState([]);

  useEffect(() => {
    const fetchExamples = async () => {
      try {
        const response = await fetch(
          "http://188.214.88.131:3000/api/get_examples"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch examples");
        }
        const data = await response.json();
        setExamples(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchExamples();
  }, []);
  return (
    <Router>
      <div>
        <Route component={Homepage} exact path="/" />
        <Route path="/mediul_de_afaceri_din_romania">
          <MDA_Ro />
        </Route>
        <Route path="/noutati">
          <News />
        </Route>
        <Route path="/joc">
          <Game />
        </Route>

        {examples.map((item) => (
          <Route path={"/" + item.title} key={item.title}>
            <Example
              title={item.title}
              alt={item.alt}
              img={item.img}
              info={item.info}
              symbol={item.symbol}
            />
          </Route>
        ))}
        <Route path="/blitzscaling">
          <Blitzscaling />
        </Route>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style.css";
import Homepage from "./views/homepage";
import Example from "./views/example";
import CompaniesData from "./assets/companies.json";

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Homepage} exact path="/" />
        {CompaniesData.companies.map((data, index) => (
          <Route path={"/" + data.title} key={index}>
            <Example company={data.title} img={data.img} />
          </Route>
        ))}
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

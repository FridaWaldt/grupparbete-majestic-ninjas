import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Landing from "./Landing/Landing";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Status from "./components/Status/Status";

function App() {
  return (
    <div className="main-wrapper">
      <div className="app-wrapper">
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/status" component={Status} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

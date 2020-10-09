import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ScrollingSys from "./components/ScrollingSys";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={ScrollingSys} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

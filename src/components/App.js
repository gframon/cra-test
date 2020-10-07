import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./forms/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Login {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;

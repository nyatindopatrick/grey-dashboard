import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Audience from "./components/Audience/Audience";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router className="main">
      <Navbar />
      <Switch>
        <Route path="/" component={Audience} exact />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

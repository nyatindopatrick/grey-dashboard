import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Audience from "./components/Audience/Audience";
import Login from "./components/Login/Login";
import Automation from "./components/Automation/Automation";
import LiveChat from "./components/Chat/LiveChat";
import Data from "./components/Data/Data";

function App() {
  return (
    <Router className="main">
      <Navbar />
      <Switch>
        <Route path="/" component={Audience} exact />
        <Route path="/login" component={Login} />
        <Route path="/automation" component={Automation} />
        <Route path="/chat" component={LiveChat} />
        <Route path="/data" component={Data} />
      </Switch>
    </Router>
  );
}

export default App;

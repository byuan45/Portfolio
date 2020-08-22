import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Travel from "./components/travel";
import Home from "./components/home";
import Recommendations from "./components/recommendations";
import Goals from "./components/goals";
import AboutMe from "./components/aboutMe";
import ReactTooltip from "react-tooltip";

function App() {
  const [content, setContent] = useState("");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home setTooltipContent={setContent} />
        </Route>
        <Route path="/travel">
          <Travel setTooltipContent={setContent}/>
          <ReactTooltip>{content}</ReactTooltip>
        </Route>
        <Route path="/recommendations">
          <Recommendations />
        </Route>
        <Route path="/goals">
          <Goals />
        </Route>
        <Route path="/aboutMe">
          <AboutMe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

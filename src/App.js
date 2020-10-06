import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import Home from "./components/pages/Home";
import Character from "./components/pages/Character";
import CharacterState from "./context/character/CharacterState";

function App() {
  return (
    <CharacterState>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/character/:name" component={Character} />
          </Switch>
        </div>
      </Router>
    </CharacterState>
  );
}

export default App;

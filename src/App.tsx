import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tutorial from "./pages/Tutorial";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="App-header-wrap">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="title">playground.</p>
          </div>
          <Navigation />
        </header>
        <main className="Main">
          <Switch>
            <Route path="/tutorial" component={Tutorial} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;

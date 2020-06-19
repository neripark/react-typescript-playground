import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tutorial from "./pages/Tutorial";
import NextFocus from "./pages/NextFocus";
import ContextTest from "./pages/ContextTest";
import AsyncComponentTest from "./pages/AsyncComponentTest";
import ReduxText from "./pages/ReduxText";
import { Provider } from "react-redux";
import { storeFactory } from "./store/store";

const App: React.FC = () => {
  const store = storeFactory();
  return (
    <div className="App">
      <Provider store={store}>
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
            <Route path="/nextfocus" component={NextFocus} />
            <Route path="/contexttest" component={ContextTest} />
            <Route path="/async-component" component={AsyncComponentTest} />
            <Route path="/redux-text" component={ReduxText} />
          </Switch>
        </main>
      </Router>
      </Provider>
    </div>
  );
};

export default App;

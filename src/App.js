import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Order from './pages/order'
import SigninPage from "./pages/singin";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/order/:id" component={Order} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;

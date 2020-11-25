import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import SigninForm from "./Components/SigninForm/SigninForm";
import FAQ from "./Components/FAQ/FAQ";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/FAQ" exact component={FAQ} />
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/SigninForm" exact component={SigninForm} />
      </Switch>
    </div>
  );
}

export default App;

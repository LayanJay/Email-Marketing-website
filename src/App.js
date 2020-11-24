import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Page_Content/Content";
import SignupForm from "./Components/SignupForm/SignupForm";

function App() {
  return (
    <div className="app">
      <Header />
      <SignupForm />
      <Content />
    </div>
  );
}

export default App;

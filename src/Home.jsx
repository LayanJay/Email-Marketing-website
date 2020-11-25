import React from "react";
import Header from "./Components/Header/Header";
import Content from "./Components/Page_Content/Content";
import SignupForm from "./Components/SignupForm/SignupForm";

function Home() {
  return (
    <div>
      <Header />
      <SignupForm />
      <Content />
    </div>
  );
}

export default Home;

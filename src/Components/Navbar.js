import { Button, Grid, IconButton } from "@material-ui/core";
import React from "react";
import menu from "../Assets/menu.svg";
import logo from "../Assets/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <Grid container md>
      <Grid sm xs className="nav">
        <div className="nav__logo-div">
          <img src={logo} alt="logo" style={{ width: "3rem" }} />
          <div className="nav__title">DAS</div>
        </div>
        <div className="nav__links">
          <div className="nav__btns">
            <Button
              style={{
                color: "#eee",
                marginRight: "1rem",
                padding: "0.7rem 1.5rem",
              }}
            >
              Home
            </Button>
            <Button
              style={{
                color: "#eee",
                marginRight: "1rem",
                padding: "0.7rem 1.5rem",
              }}
            >
              About
            </Button>
            <Button
              style={{
                color: "#eee",
                marginRight: "1rem",
                padding: "0.7rem 1.5rem",
              }}
            >
              Contact
            </Button>
            <Button
              style={{
                backgroundColor: "#fdd835",
                color: "#001835",
                marginRight: "1rem",
                padding: "0.7rem 1.5rem",
              }}
            >
              Sign in
            </Button>
          </div>
          <div className="nav__menu">
            <IconButton color="primary">
              <img src={menu} alt="menu-btn" style={{ width: "1.8rem" }} />
            </IconButton>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Navbar;

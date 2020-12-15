import {
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import menu from "../../Assets/navbar/menu.svg";
import logo from "../../Assets/navbar/logo.svg";
import "./Navbar.css";

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100%",
    backgroundColor: "#0074FC",
    color: "#eee",
    fontWeight: 500,
  },
});

function Navbar() {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <List>
        {["About", "Contact", "Log In"].map((text, index) => (
          <Link
            to={text === "Log In" ? "/SigninForm" : `/${text}`}
            className="link"
            style={{ color: "#fff" }}
          >
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <Link to="/SignupForm" className="link" style={{ color: "#001835" }}>
          <ListItem
            style={{ backgroundColor: "#fdd835", color: "#001835" }}
            button
            key="signun"
          >
            <ListItemText primary="Sign up" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <Grid container md className="nav__grid">
      <Grid sm xs className="nav">
        <Link to="/" className="link">
          <div className="nav__logo-div">
            <img src={logo} alt="logo" style={{ width: "3rem" }} />
            <div className="nav__title">DAS</div>
          </div>
        </Link>

        <div className="nav__links">
          <div className="nav__btns">
            <Link to="/About" className="link" style={{ color: "#fff" }}>
              <Button
                style={{
                  color: "#eee",
                  marginRight: "1rem",
                  padding: "0.7rem 1.5rem",
                }}
              >
                Our Story
              </Button>
            </Link>
            <Link to="/Contact" className="link" style={{ color: "#fff" }}>
              <Button
                style={{
                  color: "#eee",
                  marginRight: "1rem",
                  padding: "0.7rem 1.5rem",
                }}
              >
                Contact
              </Button>
            </Link>
            <Link to="/SigninForm" className="link" style={{ color: "#fff" }}>
              <Button
                style={{
                  color: "#eee",
                  marginRight: "1rem",
                  padding: "0.7rem 1.5rem",
                }}
              >
                Log In
              </Button>
            </Link>
            <Link
              to="/SignupForm"
              className="link"
              style={{ color: "#001835" }}
            >
              <Button
                style={{
                  backgroundColor: "#fdd835",
                  color: "#001835",
                  marginRight: "1rem",
                  padding: "0.7rem 1.5rem",
                }}
              >
                Sign Up
              </Button>
            </Link>
          </div>
          <div className="nav__menu">
            <IconButton onClick={toggleDrawer("right", true)} color="primary">
              <img src={menu} alt="menu-btn" style={{ width: "1.8rem" }} />
            </IconButton>
            <div>
              <React.Fragment key="right">
                <Drawer
                  anchor="right"
                  open={state["right"]}
                  onClose={toggleDrawer("right", false)}
                >
                  {list("right")}
                </Drawer>
              </React.Fragment>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Navbar;

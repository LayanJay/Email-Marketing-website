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
import clsx from "clsx";
import menu from "../Assets/menu.svg";
import logo from "../Assets/logo.svg";
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
        {["Home", "About", "Contact"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem
          style={{ backgroundColor: "#fdd835", color: "#001835" }}
          button
          key="signin"
        >
          <ListItemText primary="Sign in" />
        </ListItem>
      </List>
    </div>
  );

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

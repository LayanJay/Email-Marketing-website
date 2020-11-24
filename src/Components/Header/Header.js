import { Button, Fade, Grid } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import mail from "../../Assets/mail.svg";

function Header() {
  return (
    <div className="header" id="header">
      <Navbar />
      <Fade in={true} {...{ timeout: 1000 }}>
        <Grid md container>
          <Grid container md sm={12} xs={12} className="header__title-paper">
            <div className="header__title">All in one</div>
            <div className="header__title">Email Marketing Softwear</div>
            <div className="header__subTitle">
              see why 100,000 customer love us
            </div>
            <Button
              href="#signup"
              style={{
                backgroundColor: "#fdd835",
                color: "#001835",
                marginTop: "1rem",
                marginLeft: "1rem",
                padding: "0.7rem 1.5rem",
              }}
            >
              Sign up
            </Button>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="flex-start"
            md
            sm={12}
            xs={12}
            className="header__mail-paper"
          >
            <img className="header__mail-img" src={mail} alt="mail" />
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}

export default Header;

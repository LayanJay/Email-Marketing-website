import { Grid, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import "./Footer.css";
import logo from "../../Assets/navbar/logo.svg";

function Footer() {
  return (
    <>
      <div className="container">
        {/* <div style={{ minHeight: "100vh" }}></div> */}
        <Grid container className="footer__container">
          <Grid container md={4} sm={12} alignItems="center" className="center">
            <img src={logo} alt="logo" className="logo" />
            <span className="logo__name">DAS</span>
            <div className="logo__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos nostrum quod optio sit cupiditate quo quia temporibus
              laborum adipisci pariatur?
            </div>
            <hr className="hr" />
          </Grid>

          <Grid container md sm={12}>
            <Grid className="col" xs={12} sm md>
              <div className="col__title">Products</div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Pricing
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Teams
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Education
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Refer a friend
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Updates
                </a>
              </div>
            </Grid>
            <Grid className="col" xs={12} sm md>
              <div className="col__title">Features</div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Overview
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Design
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Code
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Collaborate
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Sletch Plugin
                </a>
              </div>
            </Grid>
          </Grid>
          <Grid container md sm={12}>
            <Grid className="col" xs={12} sm md>
              <div className="col__title">Get Started</div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Tutorials
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Resources
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Guides
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Examples
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Docs
                </a>
              </div>
            </Grid>
            <Grid className="col" xs={12} sm md>
              <div className="col__title">About</div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Stories
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Community
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Blog
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Careers
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Brand Assets
                </a>
              </div>
            </Grid>
          </Grid>
          <Grid md={12} sm={12} className="social">
            <hr className="social__hr" />
            <div className="social__tags">
              <IconButton>
                <FacebookIcon className="social__tags__color" />
              </IconButton>
              <IconButton>
                <LinkedInIcon className="social__tags__color" />
              </IconButton>
              <IconButton>
                <TwitterIcon className="social__tags__color" />
              </IconButton>
              <IconButton>
                <GitHubIcon className="social__tags__color" />
              </IconButton>
            </div>
            <div className="social__copyrights">
              © 2020 Layan Jayasinghe. All Rights Reserved.
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;

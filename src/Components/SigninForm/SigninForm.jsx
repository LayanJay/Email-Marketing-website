import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import signin from "../../Assets/signin.svg";
import guide_customers from "../../Assets/guide_customers.svg";
import "./SigninForm.css";

function SigninForm() {
  return (
    <div className="login">
      <Grid container>
        <Grid container md={4} xs={12} className="login__form">
          <h1 className="login__form-title">Log In</h1>
          <div className="login__form-subtext">
            Need a DAS account?{" "}
            <Link className="login__form-link" to="./SignupForm">
              Create an account
            </Link>
          </div>
          <form className="login__form-form">
            <TextField
              type="email"
              variant="outlined"
              color="primary"
              label="Email"
              style={{ marginBottom: "1rem", width: 250 }}
            />
            <TextField
              type="Password"
              variant="outlined"
              color="primary"
              label="Password"
              style={{ marginBottom: "1rem", width: 250 }}
            />
            <Button
              style={{
                backgroundColor: "#0074FC",
                color: "#ffffff",
                marginBottom: "1rem",
                padding: "0.7rem 1.5rem",
              }}
            >
              Sign Up
            </Button>
          </form>
          <Link className="login__form-link" style={{ marginBottom: "1rem" }}>
            Forgot Password?
          </Link>
          <div style={{ margin: "0 auto" }}>
            <img className="login__form-img1" src={signin} alt="signin" />
          </div>
          <div className="login__form-copyright">
            ©2020 All Rights Reserved. DAS® is a registered trademark of The LJ
            team.
          </div>
        </Grid>
        <Grid container md xs={12} className="login__guide">
          <div>
            <img
              className="login__guide-img2"
              src={guide_customers}
              alt="guide_customers"
            />
          </div>
          <div className="login__guide-text">
            <h2>Guide your customers from prospect to purchase.</h2>
            <div className="login__guide-subtext">
              Create behavior-based experiences for your audience. Our Customer
              Journey builder helps you nurture relationships and drive action
              with automations.
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SigninForm;

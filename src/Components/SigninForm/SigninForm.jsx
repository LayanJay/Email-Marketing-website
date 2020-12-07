import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import signin from "../../Assets/signin/signin.svg";
import guide_customers from "../../Assets/signin/guide_customers.svg";
import "./SigninForm.css";

//motion variants
const container = {
  init: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const imgVariant = {
  init: {
    opacity: 0,
    y: "3vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.7,
      type: "spring",
      // ease: "linear",
      stiffness: 90,
    },
  },
};

const textVariant = {
  init: {
    opacity: 0,
    y: "3vh",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function SigninForm() {
  return (
    <motion.div
      variants={container}
      initial="init"
      animate="visible"
      className="login"
    >
      <Grid container>
        <Grid container md={4} sm={12} xs={12} className="login__form">
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
              Sign In
            </Button>
          </form>
          <Link
            to="#"
            className="login__form-link"
            style={{ marginBottom: "1rem" }}
          >
            Forgot Password?
          </Link>
          <motion.div
            variants={imgVariant}
            initial="init"
            animate="visible"
            style={{ margin: "0 auto" }}
          >
            <img className="login__form-img1" src={signin} alt="signin" />
          </motion.div>
          <div className="login__form-copyright">
            ©2020 All Rights Reserved. DAS® is a registered trademark of The LJ
            team.
          </div>
        </Grid>
        <Grid container md xs={12} className="login__guide">
          <motion.div variants={imgVariant} initial="init" animate="visible">
            <img
              className="login__guide-img2"
              src={guide_customers}
              alt="guide_customers"
            />
          </motion.div>
          <div className="login__guide-text">
            <motion.h2
              variants={textVariant}
              initial="init"
              animate="visible"
              transition={{
                delay: 0.4,
                duration: 0.7,
                type: "spring",
                stiffness: 90,
              }}
            >
              Guide your customers from prospect to purchase.
            </motion.h2>
            <motion.div
              variants={textVariant}
              initial="init"
              animate="visible"
              transition={{
                delay: 0.6,
                duration: 0.7,
                type: "spring",
                stiffness: 90,
              }}
              className="login__guide-subtext"
            >
              Create behavior-based experiences for your audience. Our Customer
              Journey builder helps you nurture relationships and drive action
              with automations.
            </motion.div>
          </div>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default SigninForm;

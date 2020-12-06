import { Button, Grid, TextField } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import welcome from "../../Assets/welcome.svg";
import "./SignupForm.css";

//motion variants
const container = {
  init: {
    opacity: 0,
    y: "5vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      type: "spring",
      // ease: "linear",
      stiffness: 100,
    },
  },
};

const imgVariant = {
  init: {
    opacity: 0,
    x: "5vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.7,
      type: "spring",
      // ease: "linear",
      stiffness: 100,
    },
  },
};

function SignupForm() {
  return (
    <div className="signup">
      <Grid container direction="row-reverse">
        <Grid
          container
          md
          sm
          xs={12}
          justify="center"
          alignItems="center"
          className="signup__greet"
        >
          <motion.div variants={imgVariant} initial="init" animate="visible">
            <img className="signup__greet-img" src={welcome} alt="welcome" />
          </motion.div>
        </Grid>
        <Grid
          container
          md={7}
          sm={12}
          xs={12}
          className="signup__form signup__form-pattern"
        >
          <motion.form
            variants={container}
            initial="init"
            animate="visible"
            className="signup__form-form"
          >
            <h1 className="signup__form-title">Welcome to DAS</h1>
            <div className="signup__form-div-subtext">
              <div className="signup__form-subtext">
                Find your people. Engage your customers.
              </div>
              <div className="signup__form-subtext">
                Build your brand. Do it all with DAS marketing platform.
              </div>
              <div className="signup__form-subtext">
                Already have an account?{" "}
                <Link to="./SigninForm" className="signup__form-link">
                  Log in
                </Link>
              </div>
            </div>
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Username"
              style={{ marginBottom: "1rem", width: 250 }}
            />
            <TextField
              type="email"
              variant="outlined"
              color="primary"
              label="Email"
              style={{ marginBottom: "1rem", width: 250 }}
            />
            <TextField
              type="password"
              variant="outlined"
              color="primary"
              label="Password"
              style={{ marginBottom: "1rem", width: 250 }}
            />
            <TextField
              type="password"
              variant="outlined"
              color="primary"
              label="Re-enter Password"
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
              Sign up
            </Button>
          </motion.form>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignupForm;

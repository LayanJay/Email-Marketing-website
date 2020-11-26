import {
  Button,
  Fade,
  Grid,
  makeStyles,
  TextField,
  withStyles,
} from "@material-ui/core";
import React from "react";
import useWindowsPosition from "../../Hooks/useWindowPosition";
import "./SignupForm.css";
import signup from "../../Assets/signin.svg";
import { AnimatePresence, motion } from "framer-motion";

//motion transitions
const img_variant = {
  init: {
    opacity: 0,
    x: "20vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 90,
    },
  },
};

function SignupForm() {
  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: " #001835",
      },

      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: " #001835",
        },
      },
    },
  })(TextField);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      width: "auto",
    },
  }));

  const checked = useWindowsPosition("header");
  const classes = useStyles();
  return (
    <Fade
      in={checked}
      timeout={1000}
      //style={{ transformOrigin: "0 0 0" }}
      //{...(checked ? { timeout: 1000 } : {})}
    >
      <Grid container className="signup" id="signup">
        <Grid container md sm className="signup__grid pattern">
          <Grid container md sm xs={12} className="signup__grid-form">
            <form autoComplete="off" className="signup__form">
              <h1 style={{ margin: "3rem 0" }}>Sign up today!</h1>
              <CssTextField
                className={classes.margin}
                type="text"
                label="Name"
                variant="outlined"
              />
              <CssTextField
                className={classes.margin}
                type="email"
                label="Email"
                variant="outlined"
              />
              <CssTextField
                className={classes.margin}
                type="password"
                label="Password"
                variant="outlined"
              />
              <CssTextField
                className={classes.margin}
                type="password"
                label="Re-enter Password"
                variant="outlined"
              />
              <Grid container justify="flex-end">
                <Button
                  style={{
                    backgroundColor: "#fdd835",
                    color: "#001835",
                    marginTop: "1rem",
                    padding: "0.7rem 1.5rem",
                  }}
                  variant="contained"
                >
                  Sign up
                </Button>
              </Grid>
            </form>
          </Grid>
          <Grid container md xs={12} className="signup__grid signup__grid-img">
            {checked && (
              <motion.div
                variants={img_variant}
                initial="init"
                animate="visible"
              >
                <img className="signup__img" src={signup} alt="signup" />
              </motion.div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
}

export default SignupForm;

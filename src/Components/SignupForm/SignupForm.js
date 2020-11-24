import {
  Button,
  Fade,
  Grid,
  makeStyles,
  TextField,
  withStyles,
} from "@material-ui/core";
import React from "react";
import "./SignupForm.css";
import signup from "../../Assets/signin.svg";

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

  const classes = useStyles();
  return (
    <Fade in={true} timeout={1000}>
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
            <img className="signup__img" src={signup} alt="signup" />
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
}

export default SignupForm;

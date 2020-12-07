import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import Navbar from "../Navbar/Navbar";
import contact from "../../Assets/contact/contact.svg";
import "./Contact.css";
import { motion } from "framer-motion";

//motion variants
const basicVariant = {
  init: {
    opacity: 0,
    y: "5vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    // transition: {
    //   delay: 0.2,
    //   duration: 0.7,
    //   type: "spring",
    //   // ease: "linear",
    //   stiffness: 90,
    // },
  },
};

function Contact() {
  return (
    <div>
      <Navbar />
      <Grid container className="contact">
        <Grid md={12} sm={12} xs={12} className="contact__header">
          <div className="title-position">
            <motion.h1
              variants={basicVariant}
              initial="init"
              animate="visible"
              transition={{
                delay: 0.2,
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
              className="contact__header-title"
            >
              Contact DAS
            </motion.h1>
            <motion.div
              variants={basicVariant}
              initial="init"
              animate="visible"
              transition={{
                delay: 0.3,
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
              className="contact__header-subtext"
            >
              DAS is a marketing platform for small businesses created by the LJ
              team.
            </motion.div>
          </div>
          <motion.img
            variants={basicVariant}
            initial="init"
            animate="visible"
            transition={{
              delay: 0.4,
              duration: 0.7,
              type: "spring",
              stiffness: 100,
            }}
            className="contact__header-img"
            src={contact}
            alt="contact"
          />
        </Grid>
        <Grid md={12} sm={12} xs={12} className="contact__inquiry">
          <h2 className="contact__inquiry-title">Make an inquiry</h2>
          <Grid md={12} sm={12} xs={12} className="contact__inquiry-form">
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Name"
              style={{ marginBottom: "1rem", width: 250 }}
            />

            <TextField
              type="email"
              variant="outlined"
              color="primary"
              label="Email"
              style={{ marginBottom: "1rem", width: 250 }}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} className="contact__inquiry-form">
            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Inquiry title"
              style={{ marginBottom: "1rem", width: 250 }}
            />

            <TextField
              type="text"
              variant="outlined"
              color="primary"
              label="Message"
              style={{ marginBottom: "1rem", width: 250 }}
            />
          </Grid>
          <Grid>
            <Button
              style={{
                backgroundColor: "#0074FC",
                color: "#ffffff",
                marginBottom: "2rem",
                padding: "0.7rem 1.5rem",
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;

import { Button, Grid } from "@material-ui/core";
import React from "react";
import "./Header.css";
import mail from "../../Assets/mail.svg";
import { motion } from "framer-motion";

const title_variants = {
  init: {
    opacity: 0,
    x: "-30vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const img_variant = {
  init: {
    opacity: 0,
    x: "30vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      type: "spring",
      stiffness: 90,
    },
  },
};

function Header() {
  return (
    <div className="header" id="header">
      <Grid md container>
        <Grid container md sm={12} xs={12} className="header__title-paper">
          <motion.div
            variants={title_variants}
            initial="init"
            animate="visible"
            transition={{
              delay: 0.2,
              duration: 1,
              type: "spring",
              stiffness: 90,
            }}
            className="header__title"
          >
            All in one
          </motion.div>
          <motion.div
            variants={title_variants}
            initial="init"
            animate="visible"
            transition={{
              delay: 0.3,
              duration: 1,
              type: "spring",
              stiffness: 90,
            }}
            className="header__title"
          >
            Email Marketing Softwear
          </motion.div>
          <motion.div
            variants={title_variants}
            initial="init"
            animate="visible"
            transition={{
              delay: 0.4,
              duration: 1,
              type: "spring",
              stiffness: 90,
            }}
            className="header__subTitle"
          >
            see why 100,000 customer love us
          </motion.div>
          <motion.div
            variants={title_variants}
            initial="init"
            animate="visible"
            transition={{
              delay: 0.5,
              duration: 1,
              type: "spring",
              stiffness: 90,
            }}
          >
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
          </motion.div>
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
          <motion.img
            variants={img_variant}
            initial="init"
            animate="visible"
            className="header__mail-img"
            src={mail}
            alt="mail"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;

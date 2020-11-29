import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import React from "react";
import { motion } from "framer-motion";
import about from "../../Assets/about.svg";
import "./About.css";
import Navbar from "../Navbar/Navbar";

// motion varients
const container = {
  init: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const imgVarient = {
  init: {
    opacity: 0,
    x: "-20vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
      stiffness: 90,
    },
  },
};

const title__learn = {
  init: {
    opacity: 0,
    x: "20vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      type: "spring",
      stiffness: 90,
    },
  },
};

function About() {
  return (
    <motion.div
      variants={container}
      initial="init"
      animate="visible"
      className="about about__pattern"
    >
      <Navbar />
      <Grid container md={11} className="about__container">
        <h1 className="about__title">Our Story</h1>
        <div className="about__desc">
          <span style={{ fontSize: "2.5rem", fontWeight: 500 }}>L</span>orem
          ipsum dolor, sit amet consectetur adipisicing elit. Expedita deleniti,
          deserunt, vero beatae nulla culpa, consequuntur consequatur quod quae
          officiis ratione eaque. Magnam facere ea voluptates necessitatibus.
          Harum molestias facilis sapiente cumque! Reiciendis, vel! Quos
          accusantium ex recusandae maiores vitae consectetur nisi deserunt eum
          quidem quis, porro at corrupti in? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Expedita deleniti, deserunt, vero beatae
          nulla culpa, consequuntur consequatur quod quae officiis ratione
          eaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Expedita deleniti, deserunt, vero beatae nulla culpa, consequuntur
          consequatur quod quae officiis ratione eaque.
        </div>
      </Grid>
      <Grid container md={11} style={{ margin: "1rem auto" }}>
        <Grid container md sm xs={12} className="about__img-container">
          <motion.img
            variants={imgVarient}
            initial="init"
            animate="visible"
            className="about__img"
            src={about}
            alt="about-img"
          />
        </Grid>
        <Grid
          container
          md
          sm={6}
          xs={12}
          className="about__container"
          style={{ alignItems: "center" }}
        >
          <motion.h2
            variants={title__learn}
            initial="init"
            animate="visible"
            className="about__learn"
          >
            Learn more about DAS
          </motion.h2>
          <List>
            {[
              "Founder Story",
              "Culture",
              "Corparate Citizenship",
              "News Room",
            ].map((item, index) => (
              <ListItem button>
                <ListItemIcon>
                  <ArrowForwardIosRoundedIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default About;

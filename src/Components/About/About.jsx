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

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "keyframe", duration: 0.8 }}
      className="about"
    >
      <Grid container md={11} className="about__container">
        <h1 className="about__title">Our Story</h1>
        <div className="about__desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          deleniti, deserunt, vero beatae nulla culpa, consequuntur consequatur
          quod quae officiis ratione eaque. Magnam facere ea voluptates
          necessitatibus. Harum molestias facilis sapiente cumque! Reiciendis,
          vel! Quos accusantium ex recusandae maiores vitae consectetur nisi
          deserunt eum quidem quis, porro at corrupti in? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Expedita deleniti, deserunt, vero
          beatae nulla culpa, consequuntur consequatur quod quae officiis
          ratione eaque.Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Expedita deleniti, deserunt, vero beatae nulla culpa,
          consequuntur consequatur quod quae officiis ratione eaque.
        </div>
      </Grid>
      <Grid container md={11} style={{ margin: "2rem auto" }}>
        <Grid container md sm xs={12}>
          <img className="about__img" src={about} alt="about-img" />
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="about__learn"
          >
            Learn more about DAS
          </motion.h2>
          <List component="nav" aria-label="main mailbox folders">
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

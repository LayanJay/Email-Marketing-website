import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  bgColor: {
    backgroundColor: " #F9D51C",
  },

  text: {
    fontSize: theme.typography.pxToRem(15),
    color: "#303030",
  },
}));

function FaqAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            How to get started?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.bgColor}>
          <Typography className={classes.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            facilis blanditiis dicta repellendus aspernatur? Molestias
            aspernatur eum minus iste eveniet!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            How to choose the best plan for you?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.bgColor}>
          <Typography className={classes.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aliquam
            mollitia corporis voluptatem ex possimus maiores voluptates
            excepturi sed voluptatibus suscipit nisi error accusamus libero iste
            non, neque molestiae sint? Cum quae repudiandae nulla iusto quaerat
            earum sequi ullam quisquam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            what are the benifits of 'pay as you go' plan?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.bgColor}>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            iure praesentium repudiandae dignissimos illo excepturi iste?
            Reprehenderit explicabo debitis deleniti.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            How to get more help
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.bgColor}>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            aperiam reprehenderit voluptates corrupti doloribus quod. Sequi
            mollitia atque, quaerat distinctio ab dolor veniam sunt totam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FaqAccordion;

import { Grid } from "@material-ui/core";
import React from "react";
import email_send from "../../Assets/email_send.svg";
import "./ContentCard.css";

function ContentCard({ title, description, image }) {
  return (
    <div className="contentCard">
      <Grid container md className="contentCard--grid">
        <Grid
          container
          md
          sm={12}
          xs={12}
          alignItems="baseline"
          direction="column"
          justify="center"
          className="contentCard--details"
        >
          <h2 className="contentCard--details-title">{title}</h2>
          <p className="contentCard--details-description">{description}</p>
        </Grid>
        <Grid container md sm={12} xs={12} className="contentCard--image-grid">
          <img src={image} alt={image} className="contentCard--image" />
        </Grid>
      </Grid>
    </div>
  );
}

export default ContentCard;

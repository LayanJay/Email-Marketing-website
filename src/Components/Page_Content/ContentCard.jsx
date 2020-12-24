import { Grid, Grow } from "@material-ui/core";
import React from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./ContentCard.css";

function ContentCard({ title, description, image }) {
  const [active, setActive] = React.useState(false);
  return (
    <div className="contentCard">
      <ReactVisibilitySensor
        partialVisibility={true}
        offset={{ top: 50 }}
        onChange={(isVisible) => {
          if (isVisible) {
            setActive(true);
          }
        }}
      >
        <Grow in={active} {...(active ? { timeout: 700 } : {})}>
          <Grid
            container
            md
            direction="row-reverse"
            className="contentCard--grid"
          >
            <Grid
              container
              md
              sm={12}
              xs={12}
              justify="center"
              alignItems="center"
              className="contentCard--image-grid"
            >
              <img src={image} alt={image} className="contentCard--image" />
            </Grid>
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
          </Grid>
        </Grow>
      </ReactVisibilitySensor>
    </div>
  );
}

export default ContentCard;

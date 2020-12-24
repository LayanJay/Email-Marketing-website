import { Button, Grow, Grid } from "@material-ui/core";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./PackageContent.css";

function PackageContent({ title, description, image, button, timeout }) {
  const [active, setActive] = useState(false);
  return (
    <VisibilitySensor
      partialVisibility={true}
      offset={{ top: 50 }}
      onChange={(isVisible) => {
        if (isVisible) {
          setActive(true);
        }
      }}
    >
      <Grow in={active} {...(active ? { timeout: timeout } : {})}>
        <Grid container className="packageContent" alignItems="center">
          <Grid
            container
            md
            sm
            xs={12}
            justify="center"
            alignItems="center"
            className="packageContent--image-grid"
          >
            <img src={image} alt={image} className="packageContent--image" />
          </Grid>
          <Grid container md sm xs={12} className="position">
            <h2 className="packageContent--title">{title}</h2>
            <p className="packageContent--description">{description}</p>
            <Button
              style={{
                backgroundColor: "transparent",
                color: "#001835",
                border: "1px solid #001835",
                padding: "0.5rem 1rem",
              }}
            >
              {button}
            </Button>
          </Grid>
        </Grid>
      </Grow>
    </VisibilitySensor>
  );
}

export default PackageContent;

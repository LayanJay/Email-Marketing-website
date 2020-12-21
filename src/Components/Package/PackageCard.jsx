import { Button, Fade, Grid } from "@material-ui/core";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./PackageCard.css";

function PackageCard({ title, description, price, subtext, timeout }) {
  const [active, setActive] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(isVisible) => {
        if (isVisible) {
          setActive(true);
        }
      }}
    >
      <Fade in={active} {...(active ? { timeout: timeout } : {})}>
        <Grid container md sm={12} xs={12} className="packageCard">
          <Grid container className="packageCard--content">
            <h2 className="packageCard--title">{title}</h2>
            <p className="packageCard--description">{description}</p>
            <h3 className="packageCard--price">{price}</h3>
            <Button
              style={{
                backgroundColor: "#0033B8",
                color: "#fff",
                padding: "0.5rem 1rem",
              }}
            >
              select
            </Button>
            <p className="packageCard--subtext">{subtext}</p>
          </Grid>
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#001835",
              border: "1px solid #001835",
              padding: "0.5rem 1rem",
            }}
          >
            Read more
          </Button>
        </Grid>
      </Fade>
    </VisibilitySensor>
  );
}

export default PackageCard;

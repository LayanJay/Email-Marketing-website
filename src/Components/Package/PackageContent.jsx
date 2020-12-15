import { Button, Grid } from "@material-ui/core";
import React from "react";

function PackageContent({ title, description, image, button }) {
  return (
    <div>
      <Grid container md sm xs={12}>
        <img src={image} alt="image" />
      </Grid>
      <Grid container md sm xs={12}>
        <Grid md>
          <h2>{title}</h2>
          <p>{description}</p>
        </Grid>
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
    </div>
  );
}

export default PackageContent;

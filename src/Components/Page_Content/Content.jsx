import { Grid, Typography } from "@material-ui/core";
import React from "react";
import ContentCard from "./ContentCard";

function Content() {
  return (
    <div>
      <Grid
        container
        md
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Typography style={{ fontSize: "3rem" }}>Do it all with DAS</Typography>
        <Typography variant="textSecondry">
          Bring your audience data, marketing channels, and insights together so
          you can reach your goals faster—all from a single platform.
        </Typography>
      </Grid>
      <Grid container md>
        <ContentCard />
      </Grid>
      {/* description -> image */}

      {/* image -> description */}
      {/* description -> image */}
    </div>
  );
}

export default Content;

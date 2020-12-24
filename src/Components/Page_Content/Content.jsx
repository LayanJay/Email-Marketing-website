import { Button, Grid, Grow, TextField, Typography } from "@material-ui/core";
import React from "react";
import ContentCard from "./ContentCard";
import contentDetails from "./ContentDetails";
import Footer from "../Footer/Footer";
import "./Content.css";
import { Link } from "react-router-dom";
import newsletter from "../../Assets/newsletter.svg";
import ReactVisibilitySensor from "react-visibility-sensor";

function Content() {
  const [active, setActive] = React.useState(false);
  return (
    <div>
      <Grid
        container
        md
        justify="center"
        alignItems="center"
        direction="column"
        className="content--center"
      >
        <Typography
          style={{ fontSize: "3rem", textAlign: "center", padding: "1rem 0" }}
        >
          Do it all with DAS
        </Typography>
        <Typography variant="textSecondry" className="content--typo">
          Bring your audience data, marketing channels, and insights together so
          you can reach your goals faster—all from a single platform.
        </Typography>
      </Grid>
      <Grid container md>
        <ContentCard
          title={contentDetails.contentCard1.title}
          description={contentDetails.contentCard1.description}
          image={contentDetails.contentCard1.image}
        />
        <ContentCard
          title={contentDetails.contentCard2.title}
          description={contentDetails.contentCard2.description}
          image={contentDetails.contentCard2.image}
        />
        <ContentCard
          title={contentDetails.contentCard3.title}
          description={contentDetails.contentCard3.description}
          image={contentDetails.contentCard3.image}
        />
        <ContentCard
          title={contentDetails.contentCard4.title}
          description={contentDetails.contentCard4.description}
          image={contentDetails.contentCard4.image}
        />
      </Grid>
      <Grid
        container
        md
        justify="center"
        alignItems="center"
        direction="column"
        className="content--center"
      >
        <Typography
          style={{ fontSize: "3rem", textAlign: "center", padding: "1rem 0" }}
        >
          Resources to give you the inside track
        </Typography>
        <Typography variant="textSecondry" className="content--typo">
          Looking to get ahead? We have expert guidance, timely resources, and
          inspiring stories from entrepreneurs who’ve been in your shoes.
          Business-growing shoes.
        </Typography>
      </Grid>
      <Grid
        container
        md
        justify="center"
        direction="column"
        className="content--center"
        style={{
          backgroundColor: "#2F2E41",
          color: "#eee",
          minHeight: "400px",
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="h1"
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            textAlign: "center",
            padding: "1rem 0",
          }}
        >
          Let’s do this
        </Typography>
        <Typography variant="textSecondry" className="content--typo">
          Every big idea starts with a small step forward.
        </Typography>
        <Link to="/Package" className="content--link">
          <Button
            style={{
              backgroundColor: "#fdd835",
              color: "#001835",
              padding: "0.7rem 1.5rem",
            }}
          >
            pick a plan
          </Button>
        </Link>
      </Grid>
      <div className="content--grid-div">
        <ReactVisibilitySensor
          partialVisibility={true}
          offset={{ top: 60 }}
          onChange={(isVisible) => {
            if (isVisible) {
              setActive(true);
            }
          }}
        >
          <Grow in={active} {...(active ? { timeout: 700 } : {})}>
            <Grid container md direction="row" className="content--grid">
              <Grid
                container
                md
                sm={12}
                xs={12}
                justify="center"
                alignItems="center"
                className="content--image-grid"
              >
                <img
                  src={newsletter}
                  alt="newsletter"
                  className="content--image"
                />
              </Grid>
              <Grid
                container
                md
                sm={12}
                xs={12}
                alignItems="baseline"
                direction="column"
                justify="center"
                className="content--details"
              >
                <h2 className="content--details-title">
                  Subscribe to our newsletter
                </h2>
                <p className="content--details-description">
                  Signup for our weekly newsletter to get the latest news,
                  updates and amazing offers delivered directly in your inbox.
                </p>
                <form className="content--form">
                  <TextField
                    type="Email"
                    variant="outlined"
                    color="primary"
                    label="Email"
                    style={{ margin: "0 0 1rem 0", width: 250 }}
                  />
                  <Button
                    style={{
                      backgroundColor: "#0074FC",
                      color: "#ffffff",
                      margin: "0 0 1rem 0",
                      padding: "0.7rem 1.5rem",
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Grow>
        </ReactVisibilitySensor>
      </div>
      <Footer />
    </div>
  );
}

export default Content;

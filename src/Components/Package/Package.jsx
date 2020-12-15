import { Grid } from "@material-ui/core";
import React from "react";
import PackageCard from "./PackageCard";
import PackageContent from "./PackageContent";
import "./Package.css";
import helpful_sign from "../../Assets/helpful_sign.svg";
import pay_as_you_go from "../../Assets/pay_as_you_go.svg";

const packageDetails = {
  pacakge1: {
    title: "Standard",
    description:
      "Data-driven automation and optimization tools for businesses that want to grow faster.",
    price: "$14.99",
    subtext: "Up to 100,000 contacts 5 audiences included",
  },
  pacakge2: {
    title: "Essential",
    description:
      "Great for email-only senders who want around-the-clock support.",
    price: "$9.99",
    subtext: "Up to 50,000 contacts 3 audiences included",
  },
  pacakge3: {
    title: "Free",
    description:
      "All the multi-channel tools you need to build your business and grow your audience.",
    price: "$0",
    subtext: "Up to 2,000 contacts 1 audiences included",
  },
};

const packageContent = {
  content1: {
    image: pay_as_you_go,
    title: "Prefer to Pay as you Go?",
    description:
      "Instead of paying a monthly recurring charge, you can buy email credits as needed through our Pay As You Go plan. It's best for infrequent senders.",
    button: "Read more",
  },
  content2: {
    image: helpful_sign,
    title: "Need to help clients use DAS?",
    description:
      "Unlock the tools you need to get work done for clients when you sign up through DAS, our community for freelancers and agencies. It’s free to join with any DAS plan.",
    button: "Get started",
  },
};

function Package() {
  return (
    <div className="package">
      <Grid
        container
        md={12}
        justify="center"
        alignItems="center"
        direction="column"
        className="package--header"
      >
        <h1>We Make Your Idea</h1>
        <h1>Happen</h1>
      </Grid>
      <Grid container md={12} xs={12} className="package--cards">
        <PackageCard
          title={packageDetails.pacakge1.title}
          description={packageDetails.pacakge1.description}
          price={packageDetails.pacakge1.price}
          subtext={packageDetails.pacakge1.subtext}
        />
        <PackageCard
          title={packageDetails.pacakge2.title}
          description={packageDetails.pacakge2.description}
          price={packageDetails.pacakge2.price}
          subtext={packageDetails.pacakge2.subtext}
        />
        <PackageCard
          title={packageDetails.pacakge3.title}
          description={packageDetails.pacakge3.description}
          price={packageDetails.pacakge3.price}
          subtext={packageDetails.pacakge3.subtext}
        />
      </Grid>
      <Grid container md={12} className="package--contents">
        <PackageContent
          image={packageContent.content1.image}
          title={packageContent.content1.title}
          description={packageContent.content1.description}
          button={packageContent.content1.button}
        />
      </Grid>
      <Grid container md={12} className="package--contents">
        <PackageContent
          image={packageContent.content2.image}
          title={packageContent.content2.title}
          description={packageContent.content2.description}
          button={packageContent.content2.button}
        />
      </Grid>
      <Grid container md={12}>
        <Grid container md sm={12} xs={12}>
          hey
        </Grid>
        <Grid container md sm={12} xs={12}>
          hey
        </Grid>
      </Grid>
    </div>
  );
}

export default Package;

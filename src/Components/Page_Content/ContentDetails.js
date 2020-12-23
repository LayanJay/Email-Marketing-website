import email_send from "../../Assets/email_send.svg";
import personal_email from "../../Assets/personal_email.svg";
import data from "../../Assets/data.svg";
import Artificial_intelligence from "../../Assets/Artificial_intelligence.svg";

const contentDetails = {
  contentCard1: {
    title: "Send exactly what your contacts want to see",
    description:
      "What happens when you need to send different messages to different audiences? Segmentation and dynamic content make it easy to customize your message and send targeted emails to exactly the right contact.",
    image: email_send,
  },
  contentCard2: {
    title: "Email marketing that’s personalized and personal",
    description:
      "Personalize your emails based on any contact information you have. When you send exactly what your contacts want to see, your emails feel personal. And more people engage with your emails.",
    image: personal_email,
  },
  contentCard3: {
    title: "Find what works, then test to find what works better",
    description:
      "Reporting helps you see which emails are performing and which ones could use work. Then, you can use simple split testing to make your emails get more opens, clicks, and buys.",
    image: data,
  },
  contentCard4: {
    title: "Automation gives you back your time",
    description:
      "Make it easy to run your marketing. Set up a welcome series with email automation, segment your contacts, or use simple workflows to automate the marketing no one has time for.",
    image: Artificial_intelligence,
  },
};

export default contentDetails;

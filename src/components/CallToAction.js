import CallNowButton from "./CallNowButton";
import LandingImage from "../Images/11.jpeg";

const CallToAction = () => {
  return (
    <div className="call-to-action-container">
      <div className="landing-page-quote">
        <h1>
          FRESH <br /> SANDWICHES <br /> MADE TO ORDER.
        </h1>
        <CallNowButton />
      </div>
      <div className="img-container">
        <img
          className="landing-page-img"
          src={LandingImage}
          alt="Landing Page Image"
        />
      </div>
    </div>
  );
};

export default CallToAction;

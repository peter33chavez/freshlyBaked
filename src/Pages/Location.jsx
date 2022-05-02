import Title from "../components/Title";
import Storefront from "../Images/Storefront.jpeg";

const Location = () => {
  return (
    <div className="location-container">
      <Title pageTitle="Location" />

      <div className="location-direction-container">
        <div className="storefront-img">
          <img src={Storefront} alt="Freshly Baked Storefront" />
        </div>
        <div className="google-Location">
          <div className="google-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.124222365941!2d-121.8919353847066!3d37.33956767984108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc97e3a7f49f%3A0x9a94c759dfd20125!2sFreshly%20Baked%20Eatery!5e0!3m2!1sen!2sus!4v1651451282903!5m2!1sen!2sus"
              width="600"
              height="450"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="location-address">
            <p>152 North 3rd Street San Jose, CA 95112</p>
            <p>(Between St. John and St. James Street)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

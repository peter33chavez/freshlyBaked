import LandingImage from "./Images/11.jpeg";
import CallNowButton from "./components/CallNowButton";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hours-container">
        <h3 className="days">Mon - Fri</h3>
        <div className="divider"></div>
        <h3 className="hours">10:30am - 2:30pm</h3>
      </div>
      <div className="landing-page-quote">
        <h1>FRESH SANDWICHES MADE TO ORDER.</h1>
      </div>
      <a>
        <image
          src={LandingImage}
          alt="Landing Page Image"
          width={1000}
          height={1000}
        />
      </a>
      <CallNowButton />
    </div>
  );
}

export default App;

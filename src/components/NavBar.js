import { ImYelp } from "react-icons/im";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="nav-bar">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/location">Location</Link>
          </li>
          <li className="nav-item">
            <a href="#">Info</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
          <li className="nav-item social-icon">
            <a href="https://www.yelp.com/biz/freshly-baked-eatery-san-jose">
              <span>
                <ImYelp size={24} color={"#C2372F"} />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

import { ImYelp } from "react-icons/im";

const NavBar = () => {
  return (
    <div>
      <div className="nav-bar">
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#">Menu</a>
          </li>
          <li className="nav-item">
            <a href="#">Location</a>
          </li>
          <li className="nav-item">
            <a href="#">Info</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
          <li className="nav-item social-icon">
            <a href="#">
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

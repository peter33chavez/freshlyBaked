import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo"></div>
      <div className="title">
        <span>Freshly </span>
        <span>Baked </span>
        <span>Eatery </span>
      </div>
      <div className="divider-line"></div>
      <NavBar />
    </div>
  );
};

export default Header;

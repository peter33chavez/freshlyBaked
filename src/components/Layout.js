import Header from "./Header";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBar />
      {children}
      <div className="divider-line" style={{ marginBottom: "2rem" }}></div>
    </div>
  );
};

export default Layout;

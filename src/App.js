import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Location from "./Pages/Location";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

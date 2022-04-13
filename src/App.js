import "./App.css";
import Layout from "./components/Layout";
import Hours from "./components/Hours";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="App">
      <Layout />
      <Hours />
      <CallToAction />
      <div className="divider-line" style={{ marginBottom: "2rem" }}></div>
    </div>
  );
}

export default App;

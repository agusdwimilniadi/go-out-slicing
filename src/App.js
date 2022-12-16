import "./App.css";
import Jumbotron from "./Components/Jumbotron";
import Packages from "./Components/Packages";
import Services from "./Components/Services";
import Landing from "./Landing";
function App() {
  return (
    <>
      <Landing />
      <Jumbotron />
      <Services />
      <Packages />
    </>
  );
}

export default App;

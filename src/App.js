import "./App.css";
import Destination from "./Components/Destination";
import Discount from "./Components/Discount";
import Footer from "./Components/Footer";
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
      <Destination />
      <Discount />
      <Footer />
    </>
  );
}

export default App;

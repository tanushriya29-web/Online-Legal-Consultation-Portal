import "./App.css";

import Navbar from "./navbar";
import Hero from "./hero";
import PracticeAreas from "./practiceareas";
import HowItWorks from "./howitworks";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PracticeAreas />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
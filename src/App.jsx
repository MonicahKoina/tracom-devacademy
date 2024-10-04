import "./App.css";
import Curriculum from "./Components/Curriculum";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

import Contact from "./Components/contact";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <Curriculum />
        <Contact />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import Entities from "./components/Entities";
function App() {
  return (
    <div>
      <div className="FirstBanner">
        <div className="Navigation">
          <Navbar />
        </div>
        <FrontPage />
      </div>
      <div>
        <Entities />
      </div>
    </div>
  );
}

export default App;

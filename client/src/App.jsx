import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import Entities from "./components/Entities";
import AddItem from "./components/AddItem"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="FirstBanner">
          <div className="Navigation">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/add-item" element={<AddItem />} />
          </Routes>
        </div>
        <div>
          <Entities />
        </div>
      </div>
    </Router>
  );
}

export default App;

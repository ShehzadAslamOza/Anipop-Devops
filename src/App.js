import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";

import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";
import PassPage from "./PassPage/PassPage";
import CompPage from "./CompPage/CompPage";
import ScrollToTop from "./ScrollToTop";
import ModulePage from "./ModulePageFinal/ModulePage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/modules" element={<ModulePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/passes" element={<PassPage />} />
          <Route path="/comp" element={<CompPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

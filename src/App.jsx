import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { theme } = useContext(AppContext);

  return (
    <div className={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
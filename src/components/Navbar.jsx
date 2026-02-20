import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚀 React Dashboard</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/analytics">Analytics</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
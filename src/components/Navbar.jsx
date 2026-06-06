import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <ThemeToggleButton />
    </nav>
  );
};

export default Navbar;

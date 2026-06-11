import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaInfoCircle, FaPhone } from "react-icons/fa";
import "./style.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">Zay</div>

      <ul className="nav-menu">
        <li>
          <NavLink to="/" className="nav-link">
            <FaHome /> Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/shop" className="nav-link">
            <FaShoppingCart /> Shop
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="nav-link">
            <FaInfoCircle /> About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="nav-link">
            <FaPhone /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
import { Link } from "react-router-dom";
import "../App.css";
const Nav = () => {
  return (
    <ul id="navItems">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/reserve">Reserve A Table</Link>
      </li>
    </ul>
  );
};

export default Nav;

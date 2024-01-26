import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="namenav">
          <li>
            <Link to="/">Emily Huang.</Link>
          </li>
        </ul>
        <ul className="sidenav">
          <li>
            <Link to="/about" className="navitem">
              About
            </Link>
          </li>
          {/* <li>
            <Link to="/contact" className="navitem">
              Contact
            </Link>
          </li> */}
          <li>
            <Link to="/" className="navitem">
              All Works
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;

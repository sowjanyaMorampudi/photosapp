import { Link } from "react-router-dom";

const NavbarCom = () => {
  return (
    <nav className="nav">
      <h1>Photos App</h1>

      <div className="navbar">
        <div className="links">
          <Link to="/">Home</Link>
        </div>

        <div className="links">
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCom;

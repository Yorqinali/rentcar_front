import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <Link className="logo" to={"/"}>
          <div className="logo">
          <h1 className="logos">
            <span className="logospan">R</span>ent
            <span className="logospan">C</span>ar
          </h1>
        </div></Link>
        <div className="nav-title">
          <Link className="nav-a" to="/">Home</Link>
          <Link className="nav-a" to="/list">Car list</Link>
          <Link className="nav-a" to="/login">Log in</Link>
          <Link to="/signup"><button className="nav-btn">Sign up</button></Link>
          
        </div>
      </div>
      <div className="nav-list"></div>
    </div>
  );
};

export default Navbar;

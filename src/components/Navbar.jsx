import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
const Navbar = () => {
  const [menuOn, setMenuOn] = useState(false);
  return (
    <div>
      <Menu menuOn={menuOn}/>
      <header>
        <Link to="/" className="logo">
          TANMAY KACHROO
        </Link>
        {/* <div className="nav-links">
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div> */}
        <div
          className="menuImg"
          onClick={() => {
            setMenuOn(!menuOn);
          }}
          style={menuOn?{backgroundImage:'url(./menu-cross.svg)'}:null}
        ></div>
      </header>
    </div>
  );
};

export default Navbar;

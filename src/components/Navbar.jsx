import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";
const Navbar = () => {
  const [menuOn, setMenuOn] = useState(false);
  const handleClose =()=>{
    const body = document.querySelector("body");
    if (body.style.height === "100vh") {
      body.style.height = "auto";
      body.style.overflowY = "visible";
    } else {
      body.style.height = "100vh";
      body.style.overflowY = "hidden";
    }
    if(!menuOn){
      document.querySelector(".menuImg").style.backgroundImage =
        "url(./menu-cross.svg)";
    }
    else {
      document.querySelector(".menuImg").style.backgroundImage =
        "url(./menu.png)";
    }
    setMenuOn(!menuOn);
  }
  return (
    <div>
      <Menu menuOn={menuOn} handleClose={handleClose} />
      <header>
        <Link to="/" className="logo">
          TANMAY KACHROO
        </Link>
        <div
          className="menuImg"
          onClick={handleClose}
          // style={menuOn ? { backgroundImage: "url(./menu-cross.svg)" } : null}
        ></div>
      </header>
    </div>
  );
};

export default Navbar;

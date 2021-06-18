import { Link } from "react-router-dom";
const Menu = ({ menuOn }) => {
  return (
    <div
      className="menu"
      style={menuOn ? { transform: "translateY(100vh)" } : null}
    >
      <div className="menu-first">
        <div className="download-resume"> Download Resume 📄 (1.3MB)</div>
      </div>
      <div className="menu-second">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Menu;

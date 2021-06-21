import { Link } from "react-router-dom";
const Menu = ({ menuOn,handleClose }) => {
  
  return (
    <div
      className="menu"
      style={menuOn ? { height:'100vh' } : null}
    >
      <div className="menu-first">
        <a href='/tanmay-kachroo-resume.pdf' target='_blank' className="download-resume"> Download Resume 📄 (1.3MB)</a>
      </div>
      <div className="menu-second">
        <Link onClick={handleClose} to="/">
          Home
        </Link>
        <Link onClick={handleClose} to="/projects">
          Projects
        </Link>
        <Link onClick={handleClose} to="/#contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Menu;

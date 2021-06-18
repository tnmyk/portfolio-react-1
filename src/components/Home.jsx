import Navbar from "./Navbar";
import Tool from "./Tool";
import Project from "./Project";
import projects from "../projects";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="intro slide">
        <Navbar />
        <div className="devdesign">
          <div>
            Full Stack Developer <br /> And <br />{" "}
            <div className="designer">Designer</div>
          </div>
        </div>
      </div>
      <div className="tools slide">
        <div className="tools-heading">Tech Tools</div>
        <div className="tools-container">
          <Tool width="70" toolname="Firebase" />
          <Tool width="80" toolname="React.js" />
          <Tool width="75" toolname="Node.js" />
          <Tool width="80" toolname="Javascript" />
          <Tool width="75" toolname="HTML" />
          <Tool width="79" toolname="CSS" />
        </div>
        <div className="preferred-stack">
          Preferred Stack : Firebase, Express.js ,React.js, Node.js
        </div>
      </div>
      <div className="projects slide">
        <div className="projects-heading">Projects</div>
        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <Project
                name={project.name}
                des={project.des}
                tools={project.tools}
                key={project.id}
              />
            );
          })}
          <Link to='/projects' className='seemore'> See More {'>'}</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

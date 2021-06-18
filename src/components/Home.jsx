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
      <div className="slide">
        <div className="slide-heading">Tech Tools</div>
        <div className="tools-container">
          <Tool width="70" toolname="Firebase" />
          <Tool width="80" toolname="React.js" />
          <Tool width="75" toolname="Node.js" />
          <Tool width="80" toolname="Javascript" />
          <Tool width="75" toolname="HTML" />
          <Tool width="79" toolname="CSS" />
        </div>
        <div className="preferred-stack">
          Preferred Stack : Firebase, Express.js, React.js, Node.js
        </div>
      </div>
      <div className="slide">
        <div className="slide-heading">Projects</div>
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
          <Link to="/projects" className="seemore">
            {" "}
            See More {">"}
          </Link>
        </div>
      </div>
      <div className="slide">
        <div className="slide-heading">Contact Me</div>
        <div className="slide-subheading">Let's Build Something Together</div>
        <div className="contact-flex">
          <div className="social-flex">
            <div className="email">Email: tanmaykachroo@gmail.coms</div>
            <div className="linkedin">Linkedin</div>
            <div className="linkedin">Twitter</div>
            
          </div>
          <div className="contact-form-flex">
            <h2>Send me a Message!</h2>
            <form
              className="contact-form"
              action="https://formsubmit.co/tanmaykachroo@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_next"
                value="https://tanmayreactport.vercel.app/"
              ></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_template" value="table"></input>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                className="textarea"
                placeholder="Message"
                required
              ></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

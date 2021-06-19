import Tool from "./Tool";
import Project from "./Project";
import projects from "../projects";
import { Link, useLocation } from "react-router-dom";
import SocialFlex from "./SocialLinks";
import { useEffect } from "react";
import { SiMinutemailer } from "react-icons/si";

const Home = () => {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location])
  return (
    <div className="home">
      <div className="intro slide">
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
          Preferred Stack : <span>Firebase</span>
          <span>Express.js</span>
          <span>React.js</span>
          <span>Node.js</span>
        </div>
      </div>
      <div className="slide">
        <div className="slide-heading">Projects</div>
        <div className="projects-grid">
          {projects.map((project) => {
            if (!project.home) return "";
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
            
            See More {">"}
          </Link>
        </div>
      </div>
      <div className="slide" id="contact">
        <div className="slide-heading">Contact Me</div>
        <div className="slide-subheading">Let's Build Something Together</div>
        <div className="contact-flex">
          <SocialFlex />
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
              <button>
                Send &nbsp;
                <SiMinutemailer />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

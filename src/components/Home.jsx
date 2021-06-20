import Tool from "./Tool";
import Project from "./Project";
import projects from "../projects";
import { Link, useLocation } from "react-router-dom";
import SocialFlex from "./SocialLinks";
import { useEffect } from "react";
import { SiMinutemailer } from "react-icons/si";
import { GrReactjs, GrNode } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";

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
            Full Stack Developer <br /> And <br />
            <div className="designer">Designer</div>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slide-heading">About Me</div>
        <div className="about-flex">
          <div className="about-image-container">
            <img alt='' src="./about-image.jpg" className="about-image" />
          </div>
          <div className="about-text-container">
            <div className="about-text">
              Hi, I'm Tanmay Kachroo, a passionate self-taught frontEnd web
              developer from India. I tend to make use of modern web
              technologies to build websites that look great, feel fantastic,
              and function correctly. I am especially focusing on Reactjs.{" "}
              <br />
              <br />  Since I love both
              programming and designing, I'm also interested in creating
              programmatic designs and creative coding projects.
            </div>
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
          Preferred Stack :
          <span>
            Firebase <SiFirebase className="preferred-icon" />
          </span>
          <span>
            React.js <GrReactjs className="preferred-icon" />
          </span>
          <span>
            Node.js
            <GrNode className="preferred-icon" />
          </span>
          <span>Express.js</span>
        </div>
      </div>
      <div className="slide">
        <div className="slide-heading">Projects</div>
        <div className="projects-flex">
          {projects.map((project) => {
            if (!project.home) return "";
            return (
              <Project
                name={project.name}
                des={project.des}
                tools={project.tools}
                key={project.id}
                id={project.id}
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

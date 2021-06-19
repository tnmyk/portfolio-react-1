import projects from "../projects";
import Project from "./Project";
import { GrReactjs, GrNode } from "react-icons/gr";
import { SiFirebase, SiHtml5 } from "react-icons/si";
const Projects = () => {
  return (
    <>
      <div className="page-heading">Projects</div>
      <div className="projects-icons">
        <GrReactjs className='react-icon'/>
        <GrNode /> <SiFirebase /> <SiHtml5 />
      </div>
      <div className="projects-grid projects-page-grid">
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
      </div>
    </>
  );
};

export default Projects;

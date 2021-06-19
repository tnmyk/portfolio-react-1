import projects from "../projects";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div className="page-heading">Projects</div>
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

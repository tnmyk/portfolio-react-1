const Project = ({name,tools,des}) => {

  return (
    <div className="project">
      <div className="project-name">{name}</div>
      <div className="project-des">
        {des}
      </div>
      <div className="project-tools">
        {tools.split(" ").map((tool) => {
          return <span className="project-tool" key={Math.random()*1000}>{tool}</span>;
        })}
      </div>
    </div>
  );
};

export default Project;

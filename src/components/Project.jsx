import {FiExternalLink} from 'react-icons/fi'
const Project = ({ name, tools, des, id }) => {
  return (
    <div className="project">
      <div className="project-name">{name}</div>
      <div className="project-des">{des}</div>
      <div className="project-tools">
        {tools.split(" ").map((tool) => {
          return (
            <span className="project-tool" key={Math.random() * 1000}>
              {tool}
            </span>
          );
        })}
      </div>
      <div className='project-img-container'>
        <img src={"./project-images/" + id + ".png"} />
        <div className="project-img-cover"> <FiExternalLink/></div>
      </div>
    </div>
  );
};

export default Project;

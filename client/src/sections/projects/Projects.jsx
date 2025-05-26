import { projectSec } from "../../data/constants";
import "./Projects.css";
import { iconifyIcons } from "../../assets/icons/icon";
import useFetch from "../../services/useFetch";
import { apiRoutes } from "../../services/apiRoutes";

const Projects = () => {

  const { data: projectData, loading, error } = useFetch(apiRoutes.projectGet);
  const { data: skillsData, loading: skillLoading } = useFetch(apiRoutes.skills);

  if (loading || skillLoading) return <p className="text-center green fw py-2">Loading...</p>;

  if (error) return <p className="text-center green fw py-2">Something went wrong...</p>;

  const getSkillById = (id) => skillsData.find((skill) => skill._id === id);

  return (
    <section className="projectSec">
      <div className="container">
        <div className="projectBgCon text-center">
          <p className="k2d font-light-green fw">{projectSec.projectBgText}</p>
          <div className="projectText">
            <h6 className="k2d">{projectSec.projectTitle}</h6>
          </div>
        </div>

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {projectData.data.map((project, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="projectCard">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="projectCardTitle">{project.name}</p>
                    <a href={project.link} target="blank">
                      {iconifyIcons.redirect}
                    </a>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-3 mb-3 mb-md-0">
                      <div className="projectImgCon">
                        <img src={project.img} alt={project.title} className="d-block w-100" />
                      </div>
                    </div>
                    <div className="col-12 col-md-9 projectDescription">
                      {project.description.map((para, index) => (
                        <div key={index}>
                          <p>{para}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="d-md-flex pt-4 align-items-center">
                    <p className="pe-md-3 pb-md-0 pb-2">Tech Stack:</p>
                    <div className="row ps-3">
                      {project.technologies.map((tech, index) => {
                        const skill = getSkillById(tech);
                        return skill ? (
                          <div key={index} className="me-2 projectTechCon p-0">
                            <img src={skill.img} alt={skill.name} className="techIcon" />
                          </div>
                        ) : ('')
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            {iconifyIcons.prev}
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            {iconifyIcons.next}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

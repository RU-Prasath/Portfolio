import "./Experience.css";
import { experienceSec } from "../../data/constants";
import { apiRoutes } from "../../services/apiRoutes";
import useFetch from "../../services/useFetch.js";

const Experience = () => {

  const { data: experienceData, loading, error } = useFetch(apiRoutes.experienceGet);

  if (loading) return <p className="text-center green fw py-2">Loading...</p>;

  if (error) return <p className="text-center green fw py-2">Something went wrong...</p>;

  return (
    <section className="experienceSec">
      <div className="container">
        <h5 className="text-center mb-5 k2d">
          {experienceSec.experienceTitle}
        </h5>
        <div className="timeline">
          {experienceData.data.map((item, index) => {
            const isRight = index % 2 === 0;
            return (
              <div
                className={`timeline-item ${isRight ? "right" : "left"}`}
                key={index}
              >
                <div
                  className={`timeline-item-date ${isRight ? "left" : "right"}`}
                >
                  <div className="timeline-date">
                    {item.startDate} to {item.endDate}
                  </div>
                </div>
                <div className="timeline-content">
                  <p className="k2d roleTitle">
                    <span className="green">&lt;</span>
                    {item.position} <span className="green">/&gt;</span>
                  </p>
                  <p className="company-name">{item.company}</p>
                  <ul>
                    {item.responsibilities.map((point, index) => (
                      <div key={index}><li>{point}</li><br /></div>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

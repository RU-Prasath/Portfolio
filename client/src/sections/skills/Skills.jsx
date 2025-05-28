import { useEffect, useState } from "react";
import { skillsSec } from "../../data/constants";
import "./Skills.css";
import { apiRoutes } from "../../services/apiRoutes";
import useFetch from "../../services/useFetch";

const Skills = () => {
  
  const { data: skillCat, loading, error } = useFetch(apiRoutes.skillCategory);
  const { data: skills, loading: skillsLoading, error: skillsError } = useFetch(apiRoutes.skills);
  
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    if(skillCat && skillCat.length > 0 && !activeTab) {
      setActiveTab(skillCat[0].title);
    }
  }, [skillCat, activeTab])

  if(loading || skillsLoading) return <p className="text-center green fw py-2">Loading...</p>;

  if (error || skillsError) return <p className="text-center green fw py-2">Something went wrong...</p>;

  return (
    <section className="skillSec">
      <div className="container">
        <h3 className="green text-center k2d">{skillsSec.skillsTitle}</h3>

        <div className="skillsLeft">
          <ul
            className="nav nav-pills mb-3 d-flex justify-content-center skillsNav"
            id="pills-tab"
            role="tablist"
          >
            {skillCat.map((cat, index) => (
              <li className="nav-item skillsNavItem" role="presentation" key={index}>
                <button
                  className={`nav-link ${
                    activeTab === cat.title ? "active" : ""
                  }`}
                  id={cat.title}
                  type="button"
                  role="tab"
                  onClick={() => setActiveTab(cat.title)}
                >
                  {cat.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="row">
            <div className="tab-content col-12 col-md-6" id="pills-tabContent">
              {skillCat.map((cat, index) => (
                <div
                  key={index}
                  className={`tab-pane fade ${
                    activeTab === cat.title ? "show active" : ""
                  } skillsHeight`}
                  id={cat.title}
                  role="tabpanel"
                  aria-labelledby={cat.title}
                >
                  {skills.filter((skill) => skill.category.title === cat.title).map((skill, index) => (
                    <div key={index} className="row d-flex align-items-center justify-content-center gap-4 gap-md-0 pb-4 skillCon">
                      <div className="col-12 col-md-6 d-flex align-items-center skillImgCon">
                        <div className="skillImg">
                          <img src={`${process.env.REACT_APP_BASE_URL}${skill.img}`} alt='Skills' />
                        </div>
                        <p className="skillName">{skill.name}</p>
                      </div>
                      <div className="col-12 col-md-6 text-center">
                        <p className="green">
                          <span className="text-primary">Experience:</span> <span>{skill.expFrom}</span> -{" "}
                          <span>{skill.expTo}</span> Years
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="skillsRight col-12 col-md-6 d-none d-md-block">
              <img src={skillsSec.skillImg.src} alt={skillsSec.skillImg.alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { aboutSec } from "../../data/constants";
import { Button } from "../../components/common/Button";
import "./AboutMe.css";
// import { aboutMockData } from "../../data/mockData";
import useFetch from "../../services/useFetch";
import { apiRoutes } from "../../services/apiRoutes";

const AboutMe = () => {

  const { data: aboutData, loading, error } = useFetch(apiRoutes.aboutGet);

  if (loading) return <p className="text-center green fw py-2">Loading...</p>;

  if (error) return <p className="text-center green fw py-2">Something went wrong...</p>;

  return (
    <section className="aboutSec pt-3 pt-md-0">
      <div className="container">
        <h2 className="k2d fw">
          <span className="green">{aboutSec.aboutTitleSpan}</span> {aboutSec.aboutTitle}
        </h2>
        <div className="row align-items-center justify-content-between aboutRowContent g-4 g-md-0">
          <div className="aboutLeft col-12 col-md-4">
            <img className="myAboutImg" src={aboutSec.aboutImg.src} alt={aboutSec.aboutImg.alt} />
            <div className="aboutLeftContent d-md-flex d-none">
              <img src={aboutSec.aboutBgImg.src} alt={aboutSec.aboutBgImg.alt} />
            </div>
          </div>
          <div className="aboutRight col-12 col-md-7 kadwa">
            <p>{aboutData.data[0].paraOne}</p>
            <br />
            <p>{aboutData.data[0].paraTwo}</p>
            <div className="d-flex justify-content-end">
              <a href="#contact"><Button text={aboutSec.aboutBtn} className="aboutBtn fw text-align-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

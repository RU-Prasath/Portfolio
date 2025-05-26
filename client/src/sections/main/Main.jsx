import { Button } from "../../components/common/Button";
import "./Main.css";
import cv from "../../assets/PDF/Prasath.pdf";
import { mainSec } from "../../data/constants.js";

const Main = () => {
  return (
    <section className="container mainSection">
      <p className="mainBgText font-light fw">{mainSec.mainBgText}</p>
      <div className="row align-items-center">
        <div className="mainLeft col-12 col-md-6">
          <h1 className="k2d mainH1">
            {mainSec.mainH1} <span className="green">{mainSec.mainH1Span}</span>
          </h1>
          <p className="mainPara">
            {mainSec.mainPara}
          </p>
          <a href={cv} download="Prasath CV">
            <Button text={mainSec.cvBtnText} className="cvBtn fw" />
          </a>
        </div>
        <div className="mainRight d-none d-md-flex col-md-6">
          <div className="mainRightImg">
            <img src={mainSec.mainBgImg.src} alt={mainSec.mainBgImg.alt} />
            {/* <div className="mainRightImg2">
              <img src={mainSec.mainImg.src} alt={mainSec.mainImg.alt} />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

import { serviceSec } from "../../data/constants.js";
import "./Services.css";
import useFetch from '../../services/useFetch.js'
import { apiRoutes } from "../../services/apiRoutes.js";

const Services = () => {

  const { data: serviceData, loading, error } = useFetch(apiRoutes.servicesGet);

  if (loading) return <p className="text-center green fw py-2">Loading...</p>;

  if (error) return <p className="text-center green fw py-2">Something went wrong...</p>;

  return (
    <section className="serviceSection container">
      <p className="serviceBgText text-end k2d font-light-green fw">
        {serviceSec.serviceBgText}
      </p>
      <h4 className="text-end serviceText k2d pb-5">{serviceSec.serviceTitle}</h4>
      <div className="row serviceCardContainer justify-content-center">
        {serviceData.data.map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="serviceCardContent text-center">
              <h5>
                <span className="green">&lt;</span>
                {service.type} <span className="green">/&gt;</span>
              </h5>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

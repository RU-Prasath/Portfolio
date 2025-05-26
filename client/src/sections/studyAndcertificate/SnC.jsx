import { studyAndcer } from "../../data/constants"
import './SnC.css'
import useFetch from "../../services/useFetch.js"
import { apiRoutes } from "../../services/apiRoutes.js"

const SnC = () => {

  const { data: studyData, loading, error } = useFetch(apiRoutes.studyGet);
  const { data: certificateData, loading: cerLoading, error: cerError } = useFetch(apiRoutes.certificateGet);

  if (loading || cerLoading) return <p className="text-center green fw py-2">Loading...</p>;

  if (error || cerError) return <p className="text-center green fw py-2">Something went wrong...</p>;

  return (
    <section className="container my-3 mb-md-5">
      <div className="d-none d-md-flex row pb-4">
          <div className="col-md-5"><p className="k2d stuCer">{studyAndcer.study}</p></div>
          <div className="col-2 text-center green"><p className="k2d stuCer">{studyAndcer.and}</p></div>
          <div className="col-md-5"><p className="k2d stuCer">{studyAndcer.certificate}</p></div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="col-12 d-block d-md-none pb-3"><p className="k2d stuCer">{studyAndcer.study}</p></div>
          {studyData.data.map((study, index) => (
            <div key={index} className={`${index % 2 === 0 ? 'stuCerBg' : 'stuCerBgOne'}`}>
              <p className="stuCerTitle">{study.grade}</p>
              <p className="pb-2">{study.institution}</p>
              <p className="pb-2">{new Date(study.from).getFullYear()} - {study.to ? new Date(study.to).getFullYear() : 'Present'}</p>
              <p>{study.specialization}</p>
            </div>
          ))}
        </div>
        <div className="col-12 col-md-6">
          <div className="col-12 d-block d-md-none pb-3"><p className="k2d stuCer">{studyAndcer.certificate}</p></div>
          {certificateData.data.map((certificate, index) => (
            <div key={index} className={`${index % 2 === 0 ? 'stuCerBgOne' : 'stuCerBg'}`}>
              <p className="stuCerTitle">{certificate.title}</p>
              <p className="pb-2">{certificate.institution}</p>
              <p className="pb-2">{certificate.numberId}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SnC
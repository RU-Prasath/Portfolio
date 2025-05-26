import { footerSec } from "../../../data/constants"

const Footer = () => {
  return (
    <section className="container">
      <p className="text-center py-4">{footerSec.footerTextFirst}<span className="green k2d">{footerSec.footerTextSpan}</span>{footerSec.footerTextSec}</p>
    </section>
  )
}

export default Footer
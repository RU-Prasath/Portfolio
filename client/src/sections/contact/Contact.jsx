// import { iconifyIcons } from "../../assets/icons/icon";
// import Input from "../../components/common/Input";
// import TextArea from "../../components/common/TextArea";
// import { Button } from "../../components/common/Button";
// import { contactSec } from "../../data/constants";
// import "./Contact.css";

// const Contact = () => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {
//       name,
//       email,
//       phone,
//       message,
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("Message sent successfully!");
//       } else {
//         alert(data.error || "Something went wrong");
//       }
//     } catch (err) {
//       alert("Server error");
//     }
//   };

//   return (
//     <section className="contactCon" id="contact">
//       <div className="contactBgImg">
//         {/* <img src={contactSec.image.src} alt={contactSec.image.alt} /> */}
//         <div className="contactContent container">
//           <p className="k2d pb-3 pb-md-5 text-center">
//             <span className="green">{contactSec.contactTitleSpan}</span>{" "}
//             {contactSec.contactTitle}
//           </p>
//           <div className="row">
//             <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
//               <div>
//                 <div className="contactDetails align-items-center">
//                   {iconifyIcons.whatsapp}
//                   <a href={contactSec.whatsappLink} target="blank">
//                     {contactSec.whatsappNum}
//                   </a>
//                 </div>
//                 <div className="contactDetails align-items-center">
//                   {iconifyIcons.email}
//                   <a href={contactSec.emailLink} target="blank">
//                     {contactSec.email}
//                   </a>
//                 </div>
//                 <div className="contactDetails d-none d-lg-flex">
//                   {iconifyIcons.location}
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15542.381194757452!2d80.00037769999999!3d13.1248049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528f26f3c76115%3A0x640f74ea483ca0a5!2sVeppambaattu%2C%20Tamil%20Nadu%20602024!5e0!3m2!1sen!2sin!4v1747400160294!5m2!1sen!2sin"
//                     className="mapCon"
//                     loading="lazy"
//                     title="My Place"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 col-md-6 d-flex justify-content-center">
//               <form className="formContainer">
//                 <label>
//                   <span className="green">&lt;</span>form
//                   <span className="green">&gt;</span>
//                 </label>
//                 <label>
//                   <span className="green">&lt;</span>label
//                   <span className="green">&gt;</span> Name{" "}
//                   <span className="green">&lt;/</span>label
//                   <span className="green">&gt;</span>
//                 </label>
//                 <Input type="text" />
//                 <label>
//                   <span className="green">&lt;</span>label
//                   <span className="green">&gt;</span> Email{" "}
//                   <span className="green">&lt;/</span>label
//                   <span className="green">&gt;</span>
//                 </label>
//                 <Input type="email" />
//                 <label>
//                   <span className="green">&lt;</span>label
//                   <span className="green">&gt;</span> Phone Number{" "}
//                   <span className="green">&lt;/</span>label
//                   <span className="green">&gt;</span>
//                 </label>
//                 <Input type="number" />
//                 <label>
//                   <span className="green">&lt;</span>label
//                   <span className="green">&gt;</span> Message{" "}
//                   <span className="green">&lt;/</span>label
//                   <span className="green">&gt;</span>
//                 </label>
//                 <TextArea rows={5} />
//                 <label>
//                   <span className="green">&lt;</span>button
//                   <span className="green">&gt;</span>{" "}
//                   <Button type="submit" text="Submit" />{" "}
//                   <span className="green">&lt;/</span>button
//                   <span className="green">&gt;</span>
//                 </label>
//                 <label>
//                   <span className="green">&lt;/</span>form
//                   <span className="green">&gt;</span>
//                 </label>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { iconifyIcons } from "../../assets/icons/icon";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import { Button } from "../../components/common/Button";
import { contactSec } from "../../data/constants";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <section className="contactCon" id="contact">
      <div className="contactBgImg">
        <div className="contactContent container">
          <p className="k2d pb-3 pb-md-5 text-center">
            <span className="green">{contactSec.contactTitleSpan}</span>{" "}
            {contactSec.contactTitle}
          </p>
          <div className="row">
            {/* Left Contact Info */}
            <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
              <div>
                <div className="contactDetails align-items-center">
                  {iconifyIcons.whatsapp}
                  <a href={contactSec.whatsappLink} target="blank">
                    {contactSec.whatsappNum}
                  </a>
                </div>
                <div className="contactDetails align-items-center">
                  {iconifyIcons.email}
                  <a href={contactSec.emailLink} target="blank">
                    {contactSec.email}
                  </a>
                </div>
                <div className="contactDetails d-none d-lg-flex">
                  {iconifyIcons.location}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15542.381194757452!2d80.00037769999999!3d13.1248049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528f26f3c76115%3A0x640f74ea483ca0a5!2sVeppambaattu%2C%20Tamil%20Nadu%20602024!5e0!3m2!1sen!2sin!4v1747400160294!5m2!1sen!2sin"
                    className="mapCon"
                    loading="lazy"
                    title="My Place"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <form className="formContainer" onSubmit={handleSubmit}>
                <label>
                  <span className="green">&lt;</span>form
                  <span className="green">&gt;</span>
                </label>

                <label>
                  <span className="green">&lt;</span>label
                  <span className="green">&gt;</span> Name{" "}
                  <span className="green">&lt;/</span>label
                  <span className="green">&gt;</span>
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <label>
                  <span className="green">&lt;</span>label
                  <span className="green">&gt;</span> Email{" "}
                  <span className="green">&lt;/</span>label
                  <span className="green">&gt;</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <label>
                  <span className="green">&lt;</span>label
                  <span className="green">&gt;</span> Phone Number{" "}
                  <span className="green">&lt;/</span>label
                  <span className="green">&gt;</span>
                </label>
                <Input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <label>
                  <span className="green">&lt;</span>label
                  <span className="green">&gt;</span> Message{" "}
                  <span className="green">&lt;/</span>label
                  <span className="green">&gt;</span>
                </label>
                <TextArea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />

                <label>
                  <span className="green">&lt;</span>button
                  <span className="green">&gt;</span>{" "}
                  <Button type="submit" text="Submit" />{" "}
                  <span className="green">&lt;/</span>button
                  <span className="green">&gt;</span>
                </label>

                <label>
                  <span className="green">&lt;/</span>form
                  <span className="green">&gt;</span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>narutouzumaki@gmail.com</h5>
            <a href="">Send A Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 1234567890</h5>
            <a href="" rel="noreferrer" target='_blank'>Send A Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name="email" placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

        <a href="#header" className='scroll__up' onClick={handleScrollToTop}>Scroll Up</a>
      </div>

    </section>
  )
}

export default Contact;

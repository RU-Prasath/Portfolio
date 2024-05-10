import React from 'react';
import './about.css';
import ME from '../../assets/coding.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 Months</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>No one</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>

          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugiat maxime deleniti molestias impedit repudiandae laboriosam amet eveniet unde vel excepturi nisi temporibus aliquam perferendis inventore doloribus cum, ex voluptate! </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
          </div>
      </div>
    </section>
  )
}

export default About
import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/gojo.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Naruto</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="Me" style={{width: "360px", marginTop: "2rem", height: "30rem"}}/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
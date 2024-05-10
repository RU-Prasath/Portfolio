import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/prasath-ru/" target='blank'> <BsLinkedin style={{width: "26px", height: "26px"}} /> </a>
        <a href="https://github.com/RU-Prasath/RU-Prasath" target='blank'> <FaGithub style={{width: "26px", height: "26px"}} /> </a>
    </div>
  )
}

export default HeaderSocial
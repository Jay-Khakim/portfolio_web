import React, {Fragment} from 'react';
import '../App.scss';
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

const socialLinks = [
  {
    icon: <FiGithub />,
    link: 'https://github.com/Jay-Khakim',
  },
  {
    icon: <AiOutlineLinkedin />,
    link: 'https://www.linkedin.com/in/jaykhakim/',
  },
  {
    icon: <AiOutlineInstagram />,
    link: 'https://www.instagram.com/jay_khakim/?hl=en',
  },
];
const SideLinks = () => {
  return (
    <Fragment>
      <ul className="social" data-aos="fade-up" data-aos-delay="1000">
        {socialLinks.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="email" data-aos="fade-up" data-aos-delay="1000">
        <a href="mailto:mgmediajay@gmail.com">
          mgmediajay@gmail.com
        </a>
      </div>
    </Fragment>
  );
};

export default SideLinks;

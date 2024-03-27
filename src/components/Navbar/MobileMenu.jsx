import React from 'react';
import pdf from '../../assets/jay_CV.pdf';
import { IoCloseSharp } from 'react-icons/io5';

const navLinks = [
  {
    link: '#about',
    name: 'About',
    num: '01',
  },
  {
    link: '#experience',
    name: 'Experience',
    num: '02',
  },
  {
    link: '#projects',
    name: 'Projects',
    num: '03',
  },
];

const MobileMenu = ({ navbar, setNavbar }) => {
  return (
    <div className="mobile-navbar" onClick={() => setNavbar(false)}>
      <div className="nav" onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" onClick={() => setNavbar(false)}>
          <IoCloseSharp className="close" />
        </button>
        <ul>
          {navLinks.map(({ link, name, num }, i) => {
            return (
              <li key={num} data-aos="fade-left" data-aos-delay={(i + 1) * 100}>
                <a href={link} onClick={() => setNavbar(false)}>
                  <span>{num}.</span> {name}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="resume-btn">
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;

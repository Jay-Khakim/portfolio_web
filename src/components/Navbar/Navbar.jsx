import pdf from '../../assets/jay_cv_2.pdf';
import Photo from '../../assets/photo1.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import './_Navbar.scss';
import { Link } from 'react-router-dom';

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

const Navbar = ({ navbar, setNavbar }) => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo" data-aos="fade-down">
          <img src={Photo} alt="my_image" />
          <p>
            Jay
          </p>
        </div>
        <div className="nav">
          <ul>
            {navLinks.map(({ link, name, num }, i) => {
              return (
                <li
                  key={num}
                  data-aos="fade-down"
                  data-aos-delay={(i + 1) * 100}
                >
                  <a href={link}>
                    <span>{num}.</span> {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <button>
            <Link to={pdf} target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </button>
        </div>
        <button className="burger-btn" onClick={() => setNavbar(!navbar)}>
          <GiHamburgerMenu className="burger" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

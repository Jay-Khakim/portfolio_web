import { useState } from 'react';

import Hero from './Hero';
import About from './About';
import SideLinks from './SideLinks';
import Github from './Github';
import Projects from './Projects';
import Experience from './Experience';
import MobileMenu from './Navbar/MobileMenu';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

const Home = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="home">
      <Navbar navbar={navbar} setNavbar={setNavbar} />
      {navbar === true ? (
        <MobileMenu navbar={navbar} setNavbar={setNavbar} />
      ) : (
        ''
      )}
      <Hero />
      <SideLinks />
      <About />
      <Github />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;

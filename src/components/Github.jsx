import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { FiGithub } from 'react-icons/fi';

const Github = () => {
  return (
    <section className="git">
      <div className="title" data-aos="fade-up" data-aos-delay="100">
        <span>
          <FiGithub />
        </span>
        <h1>Github Contributions</h1>
        <div className="line"></div>
      </div>
      <div className="table" data-aos="fade-up" data-aos-delay="200">
        <GitHubCalendar username="Jay-Khakim" />
      </div>
    </section>
  );
};

export default Github;

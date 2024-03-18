import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

import { MdOutlineVideoSettings } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    repStatus: 'Public Respository',
    imgLink: img1,
    title: 'WebTech',
    desc: 'A website to represent Software Development company. I am currently crafting this project.',
    tools: ['React JS', 'Styled Components', 'sass'],
    githubLink: 'http://github.com/iamalaziz',
    websiteLink: 'http://webtech-v1.vercel.app/',
  },
  {
    id: 2,
    repStatus: 'Public Respository',
    imgLink: img2,
    title: 'Math Expert',
    desc: 'A platform where you can train math skills and compete with other people in leaderboard.',
    tools: ['React JS', 'scss', 'Express', 'API'],
    githubLink: 'https://github.com/iamalaziz/math-expert',
    websiteLink: '',
  },
  {
    id: 3,
    repStatus: 'Private Respository',
    imgLink: img3,
    title: 'APEXMALL - Ecommerce Website',
    desc: 'This is an ecommerce website with enough functionalities including orders, products, users and admins.',
    tools: ['React JS', 'Express', 'Node', 'MongoDB'],
    githubLink: 'http://github.com/iamalaziz',
    websiteLink: 'https://apex-mall.onrender.com/',
  },
  {
    id: 4,
    repStatus: 'Private Respository',
    imgLink: img4,
    title: 'Calculator',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum delectus, ipsum est tempore debitis eaque consectetur expedita',
    tools: ['React JS', 'TypeScript', 'Vite'],
    githubLink: 'https://github.com/iamalaziz/minesweeper-react-ts',
    websiteLink: '',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="section-title" data-aos="fade-up">
        <span>03. </span>Projects
      </h1>
      <div className="container">
        <ul>
          {projects.map(
            ({
              id,
              repStatus,
              imgLink,
              title,
              desc,
              tools,
              githubLink,
              websiteLink,
            }) => {
              return (
                <li key={id} data-aos="zoom-in">
                  <div className="description">
                    <p className="status">{repStatus}</p>
                    <h3>{title}</h3>
                    <p className="desc-text">{desc}</p>
                    <div className="tools">
                      {tools.map((i, id) => {
                        return <p key={id}>{i}</p>;
                      })}
                    </div>
                    <div className="project-links">
                      <a
                        href={websiteLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MdOutlineVideoSettings />
                      </a>
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiGithub />
                      </a>
                    </div>
                  </div>
                  <img src={imgLink} alt="projectImage" />
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

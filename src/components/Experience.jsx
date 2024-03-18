import { useState } from 'react';
import '../App.scss';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <section id="experience" className="experience">
      <h1 className="section-title" data-aos="fade-up">
        <span>02. </span>Experience
      </h1>
      <div className="container" data-aos="zoom-in">
        <div className="tabs">
          <button
            className={activeTab === 1 ? 'active' : null}
            onClick={() => toggleTab(1)}
          >
            HeadHunter
          </button>
          <button
            className={activeTab === 2 ? 'active' : null}
            onClick={() => toggleTab(2)}
          >
            FoxMinded
          </button>
        </div>
        <div className="detail">
          <div className={`content ${activeTab === 2 ? 'active' : ''}`}>
            <h3>
              Online Mentor at <span>@foxminded</span>
            </h3>
            <h5>Jan 2023 - Aug 2023</h5>
            <p>
              Helped students understand best practices in frontend development,
              including HTML, CSS, and JavaScript standards.
            </p>
            <p>
              Prepared illustrations, materials, tasks and docs for easy
              learning.
            </p>
          </div>
          <div className={`content ${activeTab === 1 ? 'active' : ''}`}>
            <h3>
              <em>Front-end Developer | Freelancing</em>
            </h3>
            <h5>Jul 2023 - Nov 2023</h5>
            <p>
              Developed reusable components and templates to streamline the
              development process.
            </p>
            <p>
              Implemented rich user experience by creating 30+ new features
              using semantic HTML&CSS
            </p>
            <p>
              Integrated third-party services and components like payment
              gateways, geo-location and social media.{' '}
            </p>
            <p>
              Optimized the performance of the website by implementing best
              practices such as code splitting and lazy loading.
            </p>
            <p>Experienced with building SPA, CRM, E-commerce platforms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

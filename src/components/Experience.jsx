import { useState } from "react";
import "../App.scss";

const Experience = () => {
	const [activeTab, setActiveTab] = useState(1);

	const toggleTab = index => {
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
						className={activeTab === 1 ? "active" : null}
						onClick={() => toggleTab(1)}>
						Webtech
					</button>
					<button
						className={activeTab === 2 ? "active" : null}
						onClick={() => toggleTab(2)}>
						MBM
					</button>
					<button
						className={activeTab === 3 ? "active" : null}
						onClick={() => toggleTab(3)}>
						Uzbekistan Exporters Association
					</button>
				</div>
				<div className="detail">
					<div className={`content ${activeTab === 2 ? "active" : ""}`}>
						<h3>
							CTO, Co-founder{" "}
							<a
								target="blank"
								href="https://www.instagram.com/mbmitcompanyuz/">
								<span>MBM</span>
							</a>{" "}
							(MegaBiteMedia)
						</h3>
						<h5>Sep 2020 - Jan 2022</h5>
						<p>
							Developed and executed the company's overall technology strategy
							aligned with business goals
						</p>
						<p>
							Provided technical leadership and guidance to the engineering and
							development teams
						</p>
						<p>
							Managed the technology budget and allocating resources effectively
							to meet business objectives
						</p>
						<p>
							Finished more than 10 projects, 8 locally and 2 from overseas
							companies
						</p>
						<p>
							{" "}
							Collaborated with other executives, stakeholders, and departments
							to align technology initiatives with business needs
						</p>
					</div>
					<div className={`content ${activeTab === 3 ? "active" : ""}`}>
						<h3>
							Back-end Developer | Full-time
						</h3>
						<h5>Oct 2020 - Apr 2021</h5>
						<p>
							<a target="blank" href="https://uzbru.com/en">
								<span>Uzbru.com</span>
							</a>
							,{" "}
							<a target="blank" href="https://exportuzb.com/en">
								<span>exportuzb.com</span>
							</a>
						</p>
						<p>
							Developed and maintained server side using PHP7, Laravel, admin
							panel (BackPack framework of Laravel) and DB (MySQL) from the
							scratch.
						</p>
						<p>Implemented CRUDs, localization and searching engine</p>
						<p>
							Optimized the performance of the website by implementing best
							practices such as code splitting and lazy loading.
						</p>
						<p>Experienced with building SPA, CRM, E-commerce platforms.</p>
					</div>

					<div className={`content ${activeTab === 1 ? "active" : ""}`}>
						<h3>
							Product Manager | Part-time
						</h3>
						<h5>Nov 2021 - Aug 2022</h5>
						<p>
							<a
								target="blank"
								href="https://www.figma.com/file/VpSX83hWAQasTgzcwwIzhz/New-design-for-drugsnote">
								<span>Drugsnote App</span>
							</a>
							,
							<a
								target="blank"
								href="https://www.figma.com/file/Quv1RNzcjI13wyH0FhmvMV/Drugsnote-web-site">
								<span> {" "}  Drugsnote Web-site</span>
							</a>
						</p>
						<p>
							Led the design and development of "Drugsnote," a groundbreaking
							mobile application designed to remind users to take prescribed
							medications promptly.
						</p>
						<p>
							Responsible for overseeing the UX aspects of both the web and
							mobile app design, ensuring a seamless and user-friendly
							experience.
						</p>
						<p>
            Executed a comprehensive user journey map, simplifying the overall user interaction.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;

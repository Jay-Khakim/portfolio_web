import img1 from "../assets/uzbru.png";
import img2 from "../assets/promptopia.png";
import img3 from "../assets/3d_portfolio.png";
import img4 from "../assets/apex.png";

import { MdOutlineVideoSettings } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const projects = [
	{
		id: 1,
		repStatus: "Public Respository",
		imgLink: img1,
		title: "Uzbru.com",
		desc: "A website to represent Uzbekistan Business Development Association.",
		tools: ["PHP7", "Laravel", "BackPack", "MySQL"],
		githubLink: "https://github.com/Jay-Khakim/uzbru",
		websiteLink: "https://uzbru.com/en",
	},
	{
		id: 2,
		repStatus: "Public Respository",
		imgLink: img2,
		title: "Prompttopia",
		desc: "A website made in Next JS, including CRUD operations",
		tools: ["Next JS", "TailwindCSS", "Next API", "Google OAUTH", "SSR"],
		githubLink: "https://github.com/Jay-Khakim/share-promts",
		websiteLink:
			"https://share-promts-ld75-iqam0ogk4-jaykhakims-projects.vercel.app/",
	},
	{
		id: 3,
		repStatus: "Public Respository",
		imgLink: img3,
		title: "3D Profolio",
		desc: "ThreeJS 3D Developer Portfolio",
		tools: ["React JS", "ThreeJS ", "TailwindCSS", "Framer Motion", "EmailJS"],
		githubLink: "https://github.com/Jay-Khakim/3d_portfolio",
		websiteLink: "",
	},
	{
		id: 4,
		repStatus: "Public Respository",
		imgLink: img4,
		title: "Apex Mall",
		desc: "An E-commerce website, with admin panel, several lavels of user authentication and more features",
		tools: [
			"React JS",
			"Redux",
			"Node JS",
			"Express JS",
			"bcryptjs",
			"MongoDB",
			"jsonwebtoken"
		],
		githubLink: "https://github.com/Jay-Khakim/proshop",
		websiteLink: "https://apex-mall.onrender.com/",
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
											{websiteLink && (
												<a href={websiteLink} target="_blank" rel="noreferrer">
													<MdOutlineVideoSettings />
												</a>
											)}

											<a href={githubLink} target="_blank" rel="noreferrer">
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

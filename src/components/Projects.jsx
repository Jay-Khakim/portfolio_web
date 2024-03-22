import img1 from "../assets/uzbru.png";
import img2 from "../assets/promptopia.png";
import img3 from "../assets/3d_portfolio.png";
import img4 from "../assets/apex.png";
import img5 from "../assets/myldb.png";
import img6 from "../assets/uzbekmart.png";

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
		id: 6,
		repStatus: "Public Respository",
		imgLink: img6,
		title: "Uzbekmart.com",
		desc: "A platform for B2B trading between Uzbek and International interpreneurs. ",
		tools: [
			"PHP7",
			"Laravel7",
			"MySQL",
			"Apache",
			"BackPack",
			"Localisation",
			"SearchingEngine"
		],
		githubLink: "https://github.com/Jay-Khakim/uzbekmart",
		websiteLink: "",
	},

	{
		id: 5,
		repStatus: "Public Respository",
		imgLink: img5,
		title: "My LDB (My Library Data Base)",
		desc: "This app can be used for online library management, for collecting books DB, noting quotes from books, managing book borrowings, lendings. Moreover, it can be useful for keeping up what kind of books user have been finished and for setting goals and working with them",
		tools: [
			"React JS",
			"React-bootstrap",
			"Redux",
			"Node JS",
			"Express JS",
			"bcryptjs",
			"MongoDB",
			"jsonwebtoken",
			"PayPal API"
		],
		githubLink: "https://github.com/Jay-Khakim/myldb",
		websiteLink: "",
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

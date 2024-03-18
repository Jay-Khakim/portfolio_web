import { Link } from "react-router-dom";
import pdf from "../assets/resume.pdf";

const Hero = () => {
	return (
		<section className="hero">
			<p data-aos="fade-up" data-aos-delay="500">
				Hi, my name is
			</p>
			<h1 data-aos="fade-up" data-aos-delay="600">
				Jay (Javokhirbek).
			</h1>
			<h1 data-aos="fade-up" data-aos-delay="700">
				Backend developer crafting web infrastructure
			</h1>
			<p className="summary" data-aos="fade-up" data-aos-delay="800">
      I am a Backend Developer with a specialization in creating robust server-side solutions for web applications. My expertise lies in designing and implementing efficient database architectures, developing RESTful APIs, and ensuring seamless communication between the frontend and backend systems
			</p>
			<button className="summary" data-aos="fade-up" data-aos-delay="900">
				<Link to={pdf} target="_blank" rel="noopener noreferrer">
					Resume
				</Link>
			</button>
		</section>
	);
};

export default Hero;

import React from "react";
import AboutSectionPhoto from "../assets/about-img.jpg";

const About = () => {
	return (
		<section className="about" id="about">
			<h1 className="section-title" data-aos="fade-up">
				<span>01. </span>About Me
			</h1>
			<div className="content">
				<div className="desc" data-aos="fade-up" data-aos-delay="200">
					As a passionate backend developer with a Bachelor's degree in{" "}
					<span>Computer Engineering</span>, I strive to create software that
					not only functions efficiently under the hood, but also provides
					intuitive, pixel-perfect user experiences. I have experience
					developing and designing software for the web, from simple landing
					pages to progressive web applications. I'm always looking for
					opportunities to work with those who are willing to share their
					knowledge as much as I want to learn. <br />
					<br />I regularly solve programming challenges on platforms like{" "}
					<a
						href="https://leetcode.com/Jay_Khakim/"
						target="_blank"
						rel="noreferrer">
						<span>Leetcode</span>
					</a>
					. Apart from coding, I love solving Cube Puzzles, going to gym,
					travelling to new places and having fun with friends.
					<br />
					<br />
					<figure>
						<blockquote>
							<span>Today we are limited only by our imagiantion!</span> - Ron
							Garan, Astronaut
						</blockquote>
					</figure>
				</div>
				<div
					className="wrapper"
					data-aos="flip-right"
					data-aos-delay="400"
					data-aos-duration="800">
					<img src={AboutSectionPhoto} alt="me_in_class" />
				</div>
			</div>
		</section>
	);
};

export default About;

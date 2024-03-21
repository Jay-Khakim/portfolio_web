import React from "react";

const Footer = () => {
	const currentDate = new Date();
	const currentDay = currentDate.getDay();
	const currentYear = currentDate.getFullYear();
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	return (
		<div className="footer">
			<p>By Khakimjonov Javokhirbek </p>
			<p>
				{currentYear}, Have a good <span> {dayNames[currentDay-1]}</span> 
			</p>
		</div>
	);
};

export default Footer;

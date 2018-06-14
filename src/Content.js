import React, { Component } from 'react';
import cuLogo from './images/cu-logo.jpg';
import acLogo from './images/ac-logo.jpg';
import udLogo from './images/ud-logo.jpg';

class Content extends Component {

	state = {
		skills: [
			{
				type: 'languages',
				values: ['JavaScript (ES6)', 'jQuery', 'PHP', 'ActionScript 3.0']
			},
			{
				type: 'markup',
				values: ['HTML', 'CSS', 'XML', 'JSON', 'Sass/Less']
			},
			{
				type: 'frameworks',
				values: ['React.js', 'Angular.js', 'Node.js', 'Bootstrap', 'Codeigniter', 'Wordpress']
			},
			{
				type: 'workflow',
				values: ['Jasime', 'Gulp', 'npm', 'Yarn', 'Yeoman', 'Homebrew']
			},
			{
				type: 'source control',
				values: ['GIT', 'SVN']
			},
			{
				type: 'tools',
				values: ['Sublime Text 3', 'Eclipse', 'Visual Studio']
			}
		],
		experience: [
			{
				role: 'Front-End Developer',
				date: '04/2017 to Current',
				company: 'Fueled Sites',
				location: 'Ottawa, ON',
				tasks: [
					'Consulted with customers to gather requirements and discuss design choices.',
					'Assembled projects using modern JavaScript ES6, HTML5 Canvas, React.js, Angular.js, and Node.js.',
					'Developed a task delegation and tracking system with geolocation using Angular.js 1.5.'
				]
			},
			{
				role: 'Front-End Developer',
				date: '04/2012 to 03/2017',
				company: 'Gratisites',
				location: 'Calgary, AB',
				tasks: [
					'Implemented project infrastructure primarily utilizing PHP, Codeigniter, JavaScript, and jQuery.',
					'Developed an automated FOREX trading system that focused on cron jobs, and REST API’s.',
					'Developed an employee benefits management application with claim submission and dynamic reporting.'
				]
			},
			{
				role: 'Design Guru',
				date: '07/2011 to 04/2012',
				company: 'Shopify',
				location: 'Ottawa, ON',
				tasks: [
					'Addressed technical issues in client retail sites relating to HTML, CSS, JavaScript, or Liquid development.',
					'Maintained an 88%+ customer feedback rating, and competitively ranked for total issues closed per month.',
					'Collaborated with design and development teams to address and prevent future complications.'
				]
			},
			{
				role: 'Front-End Developer',
				date: '08/2008 to 06/2011',
				company: 'Overlay TV',
				location: 'Ottawa, ON',
				tasks: [
					'Designed layouts and frameworks for brands like Disney, ELLE, and eBay.',
					'Developed a karaoke application for the Jonas Brothers that had over one million interactions.',
					'Developed interactive retail video components for Zappos, allowing interaction with products.'
				]
			}
		],
		education: [
			{
				image: cuLogo,
				degree: 'Bachelors of Information Technology',
				date: '2008',
				where: 'Carleton University',
				location: 'Ottawa, ON'
			},
			{
				image: acLogo,
				degree: 'Interactive Multimedia & Design',
				date: '2008',
				where: 'Algonquin College',
				location: 'Ottawa, ON'
			},
			{
				image: udLogo,
				degree: 'Front-End Developer Nanodegree',
				date: '2018',
				where: 'Udacity',
				location: 'by AT&T, Google, Github'
			},
			{
				image: udLogo,
				degree: 'Full-Stack Developer Nanodegree',
				date: 'in progress',
				where: 'Udacity',
				location: 'by AWS, AT&T, Google, Github'
			}
		]
	}

	render() {
		const { skills, experience, education } = this.state;

		return (
			<div id="mainContent">
				<section id="skills">
					<h2>{"<"}<span>Technical Skills</span> {"/>"}</h2>
					<div className="skillsHolder">
					{
						skills.map((skill, i) => (
							<div key={i} className="skill">
								<h3>{skill.type}</h3>
								<ul className="list-unstyled">
									{
										skill.values.map((value, i) => (
											<li key={i}>{value}</li>
										))
									}
								</ul>
							</div>
						))
					}
					</div>
				</section>

				<section id="experience">
					<h2>{"<"}<span>Experience</span> {"/>"}</h2>
					{
						experience.map((job, i) => (
							<div key={i} className="experienceHolder">
								<div className="experienceInfo">
									<h3>{job.role}</h3>
									<p>{job.date}</p>
									<h3>{job.company}</h3>
									<p>{job.location}</p>
								</div>

								<div className="experienceTasks">
									<ul>
									{
										job.tasks.map((task, i) => (
											<li key={i}>{task}</li>
										))
									}
									</ul>
								</div>
							</div>
						))
					}
				</section>

				<section id="education">
					<h2>{"<"}<span>Education</span> {"/>"}</h2>
					{
						education.map((school, i) => (
							<div key={i} className="educationHolder">
								<div className="educationLogo">
									<img src={school.image} />
								</div>

								<div className="educationInfo">
									<h3>{school.degree}, <span>{school.date}</span></h3>
									<h3>{school.where}, <span>{school.location}</span></h3>
								</div>
							</div>
						))
					}
				</section>

				<section id="goals">
					<h2>{"<"}<span>Goals</span> {"/>"}</h2>
					<p>
						My goals are to stay up to date with the latest practices, and find creative ways to write effective code. I enjoy engaging with the development communities either online or in my area, to see how people come up with different approaches to solving problems. I’ve become quite addicted to online learning resources as well. I’m currently working on my second Nanodegree from Udacity in full-stack development (on weekends).<br/>
						<br/>
						I’ve worn many hats in my professional career over the last nine years - from designer, to developer, to project manager. I believe this gives me an array of valuable skills to bring to any company, and allows me to collaborate efficiently with other teams. My ambitions in this industry are to one day lead a team of designers and developers, producing something really unique in the tech space.<br/>
						<br/>
						I love what I do and want to grow with the industry, while looking for my next big challenge.
					</p>
				</section>

				<section id="contact">
					<h2>{"<"}<span>Hire Me</span> {"/>"}</h2>
					<div className="contactHolder">
						<div className="hireInfo">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet purus viverra lorem eleifend mollis non ac erat. Phasellus ut finibus erat. Mauris tellus neque, auctor sed nisi sit amet, consequat consequat nibh. Aliquam erat volutpat. Phasellus pretium placerat risus. Donec eget porttitor neque.
							</p>
						</div>

						<div className="hireLinks">
							<h3><a href="tel:6137994994">613.799.4994</a></h3>
							<h3><a href="mailto:graham.jerome@gmail.com">graham.jerome@gmail.com</a></h3>
							<h3><a href="https://www.linkedin.com/in/grahamjerome/" target="_blank">LinkedIn</a></h3>
							<h3><a href="https://github.com/GrahamJerome" target="_blank">GitHub</a></h3>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Content;
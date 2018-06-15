import React, { Component } from 'react';
import profilePicture from './images/profilePicture.png';
import resume from './images/Graham_Jerome_fend_resume.pdf';

class Intro extends Component {

	render() {
		return (
			<section id="about">
				<div className="heroBanner">
					<h2>Voted most likely to "do computer stuff" in high school.</h2>
				</div>

				<div className="introHolder">
					<div className="profilePicture">
						<img src={profilePicture} alt="Graham Jerome profile picture" />
						<a href="#contact">Hire Me!</a>
					</div>

					<div className="introText">
						<p>
							I’m a front-end developer, striving to be full-stack, while embracing my creative side. You can usually find me at a coffee shop working on an online course, correlating data from healthy diet books, or making a mess at a local paint night. I believe form and function should be opposite sides of the same coin. I approach any task with that in mind. My experience as a developer and designer allows me to see the two as one. {"<"}<a href={resume} target="_blank">Download CV</a> {"/>"}
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Intro;
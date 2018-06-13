import React, { Component } from 'react';
import logo from "./images/rocket.jpg";

class Navigation extends Component {

	state = {
		navLinks: ['about', 'skills', 'experience', 'education', 'contact']
	}

	render() {
		const { navLinks } = this.state;

		return (
			<menu className="navHolder">
				<div className="navLogo">
					<img src={logo} alt="fueled sites logo" />
					Graham Jerome
				</div>

				<ul className="navLinks">
					{
						navLinks.map((link, i) => (
							<li key={i}>
								<a href={"#"+link}>{link}</a>
							</li>
						))
					}
				</ul>
			</menu>
		);
	}
}

export default Navigation;
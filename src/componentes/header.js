import React from "react";

import Styles from '../styles/principal.css'

import logoNodis from "../assets/images/logo.png";

const Header = () => {
	return (
		<nav className="teal darken-3">
			<div className="nav-wrapper container ">
				<a className="link-logo" href="https://www.nodis.com.br">
					<img src={logoNodis} alt="logo nodis" className="logo-principal"/>Nodis
				</a>
			</div>
		</nav>
	);
};


export default Header;

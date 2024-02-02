import React from 'react';
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
		<nav>
			<section className='name'>
				<h1><Link to = "/">Sourav Halder</Link></h1>
			</section>

			<section className='navList'>
				<ul>
					<li><Link to = "/">HOME</Link></li>
					<li><Link to = "/Bio"><span>BIO</span></Link></li>
					<li><Link to = "/Work">WORK</Link></li>
					<li><Link to = "/Contact">CONTACT</Link></li>
				</ul>
			</section>
		</nav>
  );
}

export default Navbar;
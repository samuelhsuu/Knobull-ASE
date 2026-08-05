import "./Footer.css"
import {Link} from "react-router-dom";

function Footer(){
	return(
		<nav className="footer-container">
			<ul className="footer-links">
				<Link to={"/about"}>
					<li>About Us</li>
				</Link>
				<Link to={"/resources"}>
					<li>Resources</li>
				</Link>
				<Link to={"/privacy"}>
					<li>Privacy</li>
				</Link>
				<Link to={"/contact"}>
					<li>Contact Us</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Footer;
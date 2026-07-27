import "./Footer.css"
import {Link} from "react-router-dom";

function Footer(){
	return(
		<nav className="footer-container">
			<ul className="footer-links">
				<Link to={"/about"}>
					<li>About Us</li>
				</Link>
				<li><a href="/Resources">Resources</a></li>
				<li><a href="/Privacy">Privacy</a></li>
				<li><a href="/Contact">Contact</a></li>
			</ul>
		</nav>
	);
}

export default Footer;
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => setMenuOpen(false);

	return (
		<nav className="navbar-container">
			<div className="navbar-inner">
				<button
					type="button"
					className={`navbar-toggle ${menuOpen ? "open" : ""}`}
					aria-label="Toggle menu"
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span />
					<span />
					<span />
				</button>

				<Link to="/" className="navbar-logo" onClick={closeMenu}>
					<img className="icon" src="/images/knobull-logo.png" alt="Knobull" />
				</Link>

				<ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
					<li>
						<Link to="/recommend" onClick={closeMenu}>
							Recommend
						</Link>
					</li>
					<li>
						<a href="https://knobull-chat.netlify.app/" target="_blank" rel="noreferrer">
							Chat With Us
						</a>
					</li>
					<li>
						<a href="https://www.usnews.com/topics/subjects/students" target="_blank" rel="noreferrer">
							Student News
						</a>
					</li>
				</ul>

				<a className="navbar-linkedin" href="https://www.linkedin.com/company/knobull-inc/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
					<img src="/images/Linkedin.png" alt="LinkedIn" className="linkedin-icon" />
				</a>
			</div>
		</nav>
	);
}

export default Navbar;

import "./Navbar.css";
import {Link} from "react-router-dom";
function Navbar(){
	return(
	<nav className="navbar-container">
		<ul className="navbar-links">
      <Link to ={"/"}>
        <img className="icon" src="/images/knobull-logo.png"/>
      </Link>
      <li><a href="/About">About Us</a></li>
      <li><a href="/Resources">Resources</a></li>
      <li><a href="/Chat">Chat With Us</a></li>
      <li><a href="/Privacy">Privacy</a></li>
      <li><a href="/Contact">Contact</a></li>
      <li><a href="/News">Student News</a></li>
      <a href="https://www.linkedin.com/company/knobull-inc/">
        <img src="/images/Linkedin.png" style={{height:"55px",paddingTop:"3px"}}/>
      </a>
    </ul>
	</nav>
	);
}

export default Navbar

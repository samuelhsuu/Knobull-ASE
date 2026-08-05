import "./Navbar.css";
import {Link} from "react-router-dom";
function Navbar(){
	return(
	<nav className="navbar-container">
		<ul className="navbar-links">
      <Link to ={"/"}>
        <img className="icon" src="/images/knobull-logo.png"/>
      </Link>
      <Link to ={"/recommend"}>
				<li>Recommend</li>
			</Link>
      <li><a href="https://knobull-chat.netlify.app/" target="_blank">Chat With Us</a></li>
      <li><a href="https://www.usnews.com/topics/subjects/students" target="_blank">Student News</a></li>
      <a href="https://www.linkedin.com/company/knobull-inc/" target="_blank">
        <img src="/images/Linkedin.png" style={{height:"55px",paddingTop:"3px"}}/>
      </a>
    </ul>
	</nav>
	);
}

export default Navbar

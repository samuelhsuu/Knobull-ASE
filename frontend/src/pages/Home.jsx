import Navbar from "../components/Navbar"
import "./Home.css"
function Home(){
	return (
		<>
			<Navbar/>
			<div className="page-container">
				<img className="logo" src="/images/knobull-logo.png" alt="I'm a bulldog"/>
				<h1 className="header">Knobull</h1>
				<p className="slogan">"Support" for students, developed by students</p>
				<div className="gcse-search"></div>
				<div className="image-container">
					<img src="../images/edx-logo-elm.svg"/>
					<img src="../images/chatwithus.png"/>
					<img src="../images/jobstars.png"/>
			</div>
			</div>
			
		</>
	);
}
export default Home;
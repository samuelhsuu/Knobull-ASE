import {useEffect} from 'react';
import Navbar from "../components/Navbar"
import "./Home.css"
function Home(){
	useEffect(() => {
		const existingScript = document.querySelector('script[src*="https://cse.google.com/cse.js?cx=53d5ee3be0c6f4aa7"]');

		if (!existingScript){
			const script = document.createElement('script');
			script.src = "https://cse.google.com/cse.js?cx=53d5ee3be0c6f4aa7";
			script.async = true;
			document.body.appendChild(script);
		} else {
			if (window.google && window.google.search){
				window.google.search.cse.element.go();
			}
		}
	}, []);
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
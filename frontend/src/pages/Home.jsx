import {useEffect} from 'react';
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
			<div className="page-container">
				<section className="home-hero">
					<img className="logo home-logo" src="/images/knobull-logo.png" alt="Knobull"/>
					<h1 className="header">Knobull</h1>
					<p className="slogan">"Support" for students, developed by students</p>
					<div className="search-shell">
						<div className="gcse-search"></div>
					</div>
				</section>

				<section className="partner-section" aria-label="Partner links">
					<div className="image-container">
						<a className="partner-card" href="https://www.edx.org/" target="_blank" rel="noreferrer">
							<img src="/images/edx-logo-elm.svg" alt="edX" />
						</a>
						<a className="partner-card" href="https://knobull-chat.netlify.app/" target="_blank" rel="noreferrer">
							<img src="/images/chatwithus.png" alt="Chat With Us" />
						</a>
						<a className="partner-card" href="https://jobstars.com/ref/99/" target="_blank" rel="noreferrer">
							<img src="/images/jobstars.png" alt="JobStars" />
						</a>
					</div>
				</section>
			</div>
		</>
	);
}
export default Home;
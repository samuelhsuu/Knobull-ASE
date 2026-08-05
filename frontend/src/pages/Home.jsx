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
				<img className="logo" src="/images/knobull-logo.png" alt="I'm a bulldog"/>
				<h1 className="header">Knobull</h1>
				<p className="slogan">"Support" for students, developed by students</p>
				<div className="gcse-search"></div>
				<div className="image-container">
					<a href="https://www.edx.org/" target="_blank">
						<img src="../images/edx-logo-elm.svg"/>
					</a>
					<a href="https://knobull-chat.netlify.app/" target='_blank'>
						<img src="../images/chatwithus.png"/>
					</a>
					<a href='https://jobstars.com/ref/99/' target='_blank'>
						<img src="../images/jobstars.png"/>
					</a>
				</div>
			</div>
		</>
	);
}
export default Home;
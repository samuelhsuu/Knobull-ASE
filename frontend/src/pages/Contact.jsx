import './Contact.css';
import ContactForm from '../components/ContactForm'
function Contact(){
	return(
		<>
			<div className='solid-banner'>
				<h1>Contact Us</h1>
				<img className='logo' src='../images/knobull-logo.png'/>
				<h2>We’re here to help.<br/>
				Reach out and we’ll get back quickly</h2>
			</div>
			<div className='content-container'>
				<div className='content-card'>
					<h1>Send us a message</h1>
					<div className='content-form'>
						<ContactForm/>
					</div>
					
				</div>
				<p className='copyright'>© 2026 Knobull Inc. All rights reserved.</p>
			</div>
		</>
	);
}

export default Contact;
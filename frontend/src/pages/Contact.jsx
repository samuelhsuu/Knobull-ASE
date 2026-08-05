import './Contact.css';
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

						<label htmlFor='fname'>First Name</label>
						<input type='text' id='fname' placeholder='Your name...' required/>

						<label htmlFor='lname'>Last Name</label>
						<input type='text' id='lname' placeholder='Your last name...' required/>

						<label htmlFor='email'>Email</label>
						<input type='text' id='email' placeholder='you@example.com' required/>

						<label htmlFor='message'>Message</label>
						<input type='text' id='message' className='message' placeholder='Write something...' required/>

						<button type='submit'>Submit</button>

					</div>
					
				</div>
				<p className='copyright'>© 2026 Knobull Inc. All rights reserved.</p>
			</div>
		</>
	);
}

export default Contact;
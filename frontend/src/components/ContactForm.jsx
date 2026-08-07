import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export default function ContactForm(){
	const formRef = useRef();

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({...prev, [name]: value}));
	};

	const isFormValid = Object.values(formData).every(val => val.trim() !== '');

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			'service_cd6qp6e', 
      'template_pod3q7r', 
      formRef.current, 
      '_tLV0O1nim0Car8wm'
		)
		.then(() => {
			alert('Message sent successfully!');

			// Clear form after message send
			setFormData({firstName: '', lastName: '', email: '', message: ''});
		}, (error) => {
			alert('Failed to send message, please try again.');
			console.error(error.text);
		});
	};

	return (
	<form ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
		<label htmlFor='fname'>First Name</label>
		<input type='text' name='firstName' placeholder='Your name...' value={formData.firstName} onChange={handleChange}/>

		<label htmlFor='lname'>Last Name</label>
		<input type='text' name='lastName' placeholder='Your last name...' value={formData.lastName} onChange={handleChange}/>

		<label htmlFor='email'>Email</label>
		<input type='text' name='email' placeholder='you@example.com' value={formData.email} onChange={handleChange}/>

		<label htmlFor='message'>Message</label>
		<textarea type='text' name='message' className='message' placeholder='Write something...' value={formData.message} onChange={handleChange}/>

		<button type='submit' disabled={!isFormValid}>Submit</button>
	</form>
	);
}
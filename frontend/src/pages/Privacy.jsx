import './Privacy.css';

function Privacy(){
	return(
		<>
			<div className="privacy-banner">
				<h1>Privacy Policy</h1>
				<img className='logo' src='../images/knobull-logo.png'/>
				<h2>Your personal data belongs to you.<br/>
					That's how privacy should be.
					</h2>
			</div>
			<div className='content-container'>
				<div className='content-card'>
					<h1>Privacy Policy</h1>
					<p>
						This privacy policy applies to Knobull, Inc. services, applications and other products that link to this privacy policy. <br/><br/>

						The Knobull Team is committed to protecting the privacy of its user community. The intent of this privacy policy is to insure users that we will not gather information about individuals who interact with our services.<br/><br/>

						Knobull prevents leakage by default. Instead, when you click on a link on our site, we route (redirect) that request in such a way so that it does not send your interface to other sites. The other sites will still know that you visited but they will not know what connection you entered beforehand.<br/><br/>

						Other search engines and blog sites save your interface history. Usually your connections are saved along with the date and time of the interface, some information about your computer (e.g. your IP address, User agents and often a unique identifier stored in a browser cookies) and if you are logged in, your account information (e.g. name and email address). Also, with this information your interfaces can be tied together. This means someone can see all your activity, not just one isolated interface. You can usually find out a lot about a person from this history.<br/><br/>

						For these reasons, Knobull takes the approach to not collect any personal information. The decisions of whether and how to comply with law enforcement requests, whether and how to anonymize data, and how to best protect your information from hackers are out of our hands. Your personal history is safe with us because it cannot be tied to you in any way.<br/><br/>

						We save blog users’s email address but again, not in a personally identifiable way, as we do not store IP addresses or unique User agent strings. We use aggregate, non-personal data to improve our service. If you contact us, it may be stored in our email. However, you can give anonymous feedback (by not entering your email or other personal info on the feedback form).<br/><br/>

						At times we do add an affiliate code to some eCommerce sites (e.g. edX & JobStars) that results in small commissions being paid back to Knobull when our users make purchases at those sites. We do not use any third parties to do the code insertion, and we do not work with any sites that share personally identifiable information (e.g. name, address, etc.) via their affiliate programs. This means that no information is shared from Knobull to the sites, and the only information that is collected from this process is product information. This is not tied to any particular user and we do not save or store such information. This whole affiliate process is part of our business model to reduce promotions on Knobull. These native promotions are blended into the content of Blog articles and will always be unobtrusive to readers.<br/><br/>

						Also, like anyone else, we will comply with court ordered legal requests. However, in our case, we don't expect any because there is nothing useful to give them since we don't collect any personal information.<br/><br/>

						Please note that this policy applies only to Knobull services and not to the sites of other companies or organizations to which we provide links or to any software that may be downloaded from our site. All research expert organizations that use our blog post development support and distribution services will be fully informed of our security policy and will understand that continued use of our support are contingent on their compliance.<br/><br/>

						Lynn Bentley, President, wrote this policy and if you have questions or input, please submit feedback.
					</p>
				</div>

			</div>
		</>
	);
}
export default Privacy;
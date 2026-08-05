import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RootLayout(){
	return(
		<div className='app-container'>
			<Navbar />
			<ScrollRestoration />
			
			<main className='main-content'>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
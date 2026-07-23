import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function RootLayout(){
	return(
		<div className='app-container'>
			<Navbar />

			<main className='main-content'>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
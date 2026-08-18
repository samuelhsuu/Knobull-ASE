import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Recommend from './pages/Recommend.jsx';
import Home from './pages/Home.jsx';
import RootLayout from './components/RootLayout.jsx';
import About from './pages/About.jsx';
import Resources from './pages/Resources.jsx';
import Privacy from './pages/Privacy.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
		{path: "/", element:<Home/>},
  	{path: "/recommend", element:<Recommend/>},
		{path: "/about", element:<About/>},
		{path: "/resources", element:<Resources/>},
		{path: "/privacy", element: <Privacy/>},
		{path: "/contact", element: <Contact />},
		{path: "*", element: <NotFound />}
	],
	}
	
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)

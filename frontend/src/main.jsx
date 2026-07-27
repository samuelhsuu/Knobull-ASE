import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Recommend from './pages/Recommend.jsx'
import Home from './pages/Home.jsx';
import RootLayout from './components/RootLayout.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
		{path: "/", element:<Home/>},
  	{path: "/recommend", element:<Recommend/>},
		{path: "/about", element:<About/>}
	],
	}
	
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)

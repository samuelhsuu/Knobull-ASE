import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Recommend from './pages/Recommend.jsx'
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {path: "/", element:<Home/>},
  {path: "/recommend", element:<Recommend/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)

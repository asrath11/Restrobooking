import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Locations from './components/locationSection/Locations.jsx';
import Package from './components/Packages/Package.jsx';
import Theater from './components/BookingSection/Theater.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/locations' element={<Locations />}></Route>
      <Route path='/book-now/:area' element={<Package />}></Route>
      <Route path='/theater/:package' element={<Theater />}></Route>
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App></App> */}
  </StrictMode>
);

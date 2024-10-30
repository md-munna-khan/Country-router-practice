import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home/Home.jsx';
import About from './assets/components/About/About.jsx';
import Contact from './assets/components/Contact/Contact.jsx';

import Countries from './Countries/Countries.jsx';
import CountryDetails from './assets/components/CountryDetails/CountryDetails.jsx';
import PageError from './assets/components/Erroe/PageError.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<PageError></PageError>,
    children:[
    {
      path: '/about',
      element:<About></About>
    },{
      path:'/Contact',
      element: <Contact></Contact>
    },{
      path:'/countries',
      loader:()=> fetch("https://restcountries.com/v3.1/all"),
      element:<Countries></Countries>
    },{
      path:"/country/:countryId",
      loader:({params})=> fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`),
      element:<CountryDetails></CountryDetails>
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

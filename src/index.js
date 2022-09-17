import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AnimalPage from './routes/Animal.page';
import Navbar from './components/Navbar';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './routes/Home.page';
import GaleriaPage from './routes/Galeria.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
         path: "/Home",
         element: <HomePage />,
       },
      {
        path: "/Animal",
        element: <AnimalPage />,
      },
      {
        path: "/Galeria",
        element: <GaleriaPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import Contact from './pages/Contact';
import './locales/i18n';
import About from './pages/About';
import Services from './pages/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/services',
        element: <Services />
      }
    ]
  },
  {
    path: '/login',
    element: <div>Login</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>
);

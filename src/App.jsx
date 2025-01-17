import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AllProducts from './pages/AllProducts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="https://ecommerce-store-react-tailwind.vercel.app/all-products" element={<AllProducts/>} />
    </Route>
  ) 
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AllProducts from './pages/AllProducts';
import CategoryPage from './pages/CategoryPage';
import SignUp from './pages/SignUp';
import ProductDetails from './pages/ProductDetailPage';
import ScrollToTop from './components/ScrollToTop';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/:category" element={<CategoryPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Route>
  )
);

const App = () => {
  return (
        <RouterProvider router={router} />
  );
};

export default App;
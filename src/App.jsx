import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import AllProducts from './pages/AllProducts';
import CategoryPage from './pages/CategoryPage';
import SignUp from './pages/SignUp';
import ProductDetails from './pages/ProductDetailPage';
import AddToCartPage from './pages/AddToCartPage';
import CheckoutPage from './pages/CheckOutPage';
import { CartProvider } from './context/CartContext'; 
import SignIn from './pages/SignIn';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/:category" element={<CategoryPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path='/AddToCartPage' element={<AddToCartPage />}/>
      <Route path='/Checkout' element={<CheckoutPage/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
    </Route>
  )
);

const App = () => {
  return (
    // Wrap the RouterProvider with CartProvider
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
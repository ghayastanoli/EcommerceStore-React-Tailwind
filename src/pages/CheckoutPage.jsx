import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { state } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 10;
  const tax = subtotal * 0.1; 
  const total = subtotal + shipping + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing payment:', { formData, paymentMethod, total });
  };

  return (
    <div className="container mx-auto px-6 py-8 font-jak">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-6">Checkout Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 py-1 block w-full rounded-md border-2 border-gray-200 shadow-sm px-2 focus:outline-none  focus:border-orange-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 py-1 block w-full  rounded-md border-2 border-gray-200 shadow-sm px-2 focus:outline-none  focus:border-orange-200"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 py-1 block w-full rounded-md border-2 border-gray-200 shadow-sm px-2 focus:outline-none  focus:border-orange-200"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 py-1 block w-full rounded-md border-2 border-gray-200 shadow-sm px-2 focus:outline-none  focus:border-orange-200"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 py-1 block w-full rounded-md border-2 border-gray-200 shadow-sm px-2 focus:outline-none  focus:border-orange-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="mt-1 py-1 block w-full rounded-md border-2 border-gray-200 shadow-sm px-2 focus:outline-none  focus:border-orange-200"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit"
                      checked={paymentMethod === 'credit'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="form-radio text-orange-500"
                    />
                    <span className="ml-2">Credit Card</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="debit"
                      checked={paymentMethod === 'debit'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="form-radio text-orange-500"
                    />
                    <span className="ml-2">Debit Card</span>
                  </label>
                </div>

                {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="mt-1 py-1 block w-full rounded-md border-2 border-gray-200 shadow-sm px-2 focus:outline-none  focus:border-orange-200"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="mt-1 py-1 px-2 block w-full rounded-md border-2 border-gray-200 shadow-sm focus:outline-none  focus:border-orange-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="mt-1 py-1 block w-full rounded-md border-2 border-gray-200 shadow-sm px-2 focus:outline-none  focus:border-orange-200"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-36">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-16 w-16 object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-sm mt-6">${(item.price).toFixed(2)}</p>
                </div>
              ))}

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
              >
                Place Order
              </button>

              <Link
                to="/AddToCartPage"
                className="block text-center text-orange-500 hover:text-orange-600 mt-4"
              >
                Return to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const AddToCartPage = () => {
  const { state, dispatch } = useCart();

  // Function to update the quantity of an item
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      // Remove the item if the quantity becomes 0 or less
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
    }
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  // Calculate the total price of cart items
  const totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-10 font-jak">
      <h1 className="text-3xl font-semibold text-center mb-6">Your Cart</h1>

      {/* Cart Items List */}
      <div className="cart-items">
        {state.items.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty. Start shopping!</p>
        ) : (
          <div>
            {state.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                  <img src={item.thumbnail} alt={item.title} className="h-24 w-24 object-cover rounded-md" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">Price: ${item.price}</p>
                    <div className="flex items-center mt-2">
                      {/* Quantity Controls */}
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="mx-4">{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className="ml-4 text-red-500"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Summary */}
      <div className="mt-6 p-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">Total Price:</span>
          <span className="text-xl font-semibold">${totalPrice.toFixed(2)}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-4">
          <Link to="/" className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600">
            Continue Shopping
          </Link>
          <Link
            to="/checkout"
            className={`${
              state.items.length === 0 ? 'bg-gray-300' : 'bg-orange-500'
            } text-white py-2 px-6 rounded-md hover:bg-orange-600`}
            disabled={state.items.length === 0}
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
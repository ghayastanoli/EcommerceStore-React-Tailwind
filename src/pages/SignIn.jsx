import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../assets/signup.png';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-mont">
      <div className="flex flex-col md:flex-row items-center bg-slate-100 shadow-lg rounded-lg overflow-hidden">
        {/* Image Section.. */}
        <div className="w-full md:w-1/2">
          <img src={myImage} alt="Signup" className="w-full h-full object-cover" />
        </div>

        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 p-8 pt-6">
          <h2 className="text-4xl font-bold text-gray-800 text-left mb-4">Sign In</h2>
          <p className="text-left text-sm text-gray-600 mt-1 mb-8">
            New to ZappyBuy? <Link to="/sign-up" className="text-orange-500 hover:underline">Sign Up / Register</Link>
          </p>
          <form>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg border-2 hover:bg-orange-600 transition duration-300 font-jak border-orange-500 hover:border-orange-600"
            >
              Sign In
            </button>
            <Link to='/'><button className='text-sm text-orange-500 w-[100%] text-center pt-4'>Back to Home</button></Link>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default SignUp;
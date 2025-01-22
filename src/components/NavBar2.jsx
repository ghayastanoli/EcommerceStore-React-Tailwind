import React, { useState, useEffect, useRef } from "react";
import myImage from "../assets/zap.png";
import myImage2 from "../assets/cart2.png";
import myImage3 from "../assets/signin.png";
import myImage4 from "../assets/search.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavBar2 = () => {
  const [query, setQuery] = useState("");
  const { state } = useCart();
  const cartItemsCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const [hiddenLinks, setHiddenLinks] = useState([]);
  const [visibleLinks, setVisibleLinks] = useState([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { label: "SmartPhones", to: "/smartphones" },
    { label: "Laptops", to: "/laptops" },
    { label: "Fragrances", to: "/fragrances" },
    { label: "Skincare", to: "/skincare" },
    { label: "Groceries", to: "/groceries" },
    { label: "Watches", to: "/watches" },
    { label: "Furniture", to: "/furniture" },
    { label: "Clothing", to: "/clothing" },
    { label: "Home Decoration", to: "/home-decoration" },
    { label: "Auto", to: "/auto" },
    { label: "Accessories", to: "/Jewelery & Accessories" },
    { label: "All Products", to: "/all-products" },
  ];

  const handleResize = () => {
    if (navRef.current) {
      const navWidth = navRef.current.offsetWidth;
      const totalItemsWidth = 1330; // Width at which all items fit perfectly.
      const availableSpace = navWidth - totalItemsWidth;

      // Estimate the number of links that can fit based on available space
      const maxVisibleLinks = Math.max(
        Math.floor((navWidth - 200) / 100), // Adjust 120 as the average width of a link
        0
      );

      setVisibleLinks(navItems.slice(0, maxVisibleLinks));
      setHiddenLinks(navItems.slice(maxVisibleLinks));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Trigger on initial render
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    console.log("Search Query:", e.target.value); // Replace with your search logic
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-white px-1 sm:px-3">
        <div className="flex items-center justify-around px-2 sm:px-6 py-2 gap-5 font-jak max-w-[1350px] m-auto w-[100%]">
          {/* Logo Section */}
          <div>
            <img src={myImage} alt="Logo" className="h-[80px]" />
          </div>

          {/* Search Bar Section */}
          <div className="flex-1 max-w-4xl mx-auto relative inline-block gap-3">
            <img
              src={myImage4}
              alt=""
              className="absolute right-4 top-3 h-[25px]"
            />
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Zap Your Way to Amazing Finds!"
              className="w-full px-3 py-3 border placeholder:text-white md:placeholder:text-slate-400 border-slate-400 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none focus:border-0"
            />
          </div>

          {/* Cart and Sign-Up Section */}
          <div>
            <ul className="hidden sm:flex space-x-4 items-center">
              <li>
                <div className="relative">
                  <Link to="/AddToCartPage" className="flex items-center">
                    <img src={myImage2} alt="Cart" className="h-[35px]" />
                    <span className="bg-orange-400 py-2 font-mont absolute left-7 border-2 border-white text-white font-medium rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      {cartItemsCount}
                    </span>
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  to="/sign-up"
                  className="bg-white flex mr-6 p-2 px-3 rounded-b-xl text-sm hover:text-white transition-all duration-200"
                >
                  <img src={myImage3} alt="" className="h-[35px]" />
                </Link>
              </li>
            </ul>
            {/* Drawer Toggle for Small Screens */}
            <button
              onClick={() => setDrawerOpen(!isDrawerOpen)}
              className="sm:hidden bg-gray-200 p-1 rounded-md text-gray-800"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Navbar Links */}
      <div className="bg-orange-500 py-3 shadow-xl">
        <div
          ref={navRef}
          className="flex justify-center font-mont px-12 text-md font-medium text-white"
        >
          <ul className="flex gap-3 items-center">
            {visibleLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Dropdown for "More" */}
            {hiddenLinks.length > 0 && (
              <li className="relative group">
                <button className="hover:border-orange-600 transition duration-200 hover:rounded-md p-1 hover:bg-orange-600">
                  More
                </button>
                <ul className="absolute left-0 bg-orange-500 text-white shadow-lg rounded-md hidden group-hover:block">
                  {hiddenLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.to}
                        className="block px-4 py-2 hover:bg-orange-600 text-nowrap text-md"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Drawer for Small Screens */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 w-3/4 rounded-lg space-y-4">
            <button
              onClick={() => setDrawerOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
            <ul className="space-y-4">
              <li>
                <Link to="/AddToCartPage" className="text-gray-800">
                  Cart ({cartItemsCount})
                </Link>
              </li>
              <li>
                <Link to="/sign-up" className="text-gray-800">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar2;
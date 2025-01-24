import React, { useState, useEffect, useRef } from "react";
import myImage from "../assets/zap.png";
import myImage2 from "../assets/cart2.png";
import myImage3 from "../assets/signin.webp";
import myImage4 from "../assets/search.png";
import myImage5 from "../assets/menu.webp";
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
      const totalItemsWidth = 1330;
      const maxVisibleLinks = Math.max(
        Math.floor((navWidth - 200) / 90),
        0
      );

      setVisibleLinks(navItems.slice(0, maxVisibleLinks));
      setHiddenLinks(navItems.slice(maxVisibleLinks));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-white px-1 md:px-8 shadow-md sm:shadow-none">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2 gap-5 font-jak max-w-[1350px] m-auto w-[100%]">
          {/* Logo Section */}
          <div>
            <Link to="/">
              <img src={myImage} alt="Logo" className="h-12 md:h-20" />
            </Link>
          </div>

          {/* Search Bar Section - Hidden on mobile */}
          <div className="hidden sm:block flex-1 max-w-4xl mx-auto relative gap-3">
            <img
              src={myImage4}
              alt=""
              className="absolute right-3 top-3 h-[25px]"
            />
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Zap Your Way to Amazing Finds!"
              className="w-full px-3 py-3 border placeholder:text-white md:placeholder:text-slate-400 border-slate-400 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none focus:border-0"
            />
          </div>

          {/* Cart and Sign-Up Section - Hidden on mobile */}
          <div className="flex items-center">
            <div className="hidden sm:flex space-x-4 items-center">
              <div className="relative">
                <Link to="/AddToCartPage" className="flex items-center">
                  <img src={myImage2} alt="Cart" className="h-[35px]" />
                  <span className="bg-orange-400 py-2 font-mont absolute left-7 border-2 border-white text-white font-medium rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                </Link>
              </div>
              <Link
                to="/sign-up"
                className="bg-white flex p-2 px-3 rounded-b-xl text-sm hover:text-white transition-all duration-200"
              >
                <img src={myImage3} alt="" className="h-[35px]" />
              </Link>
            </div>

            {/* Hamburger Menu Button - Visible only on mobile */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="sm:hidden flex flex-col justify-between "
            >
              <img src={myImage5} alt="" className="h-[30px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links - Hidden on mobile */}
      <div className="hidden sm:block bg-orange-500 py-3 shadow-xl">
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

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="h-full flex flex-col font-jak">
          {/* Drawer Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
          </div>

          {/* Search Bar in Drawer */}
          <div className="p-4 border-b font-jak">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="w-full px-3 py-2 border rounded-lg "
              />
              <img
                src={myImage4}
                alt=""
                className="absolute right-3 top-2 h-[20px]"
              />
            </div>
          </div>

          {/* Cart and Sign Up in Drawer */}
          <div className="p-4 border-b flex items-center space-x-4 font-jak">
            <Link to="/AddToCartPage" className="flex items-center">
              <img src={myImage2} alt="Cart" className="h-[25px]" />
              <span className="ml-2">Cart ({cartItemsCount})</span>
            </Link>
            <Link to="/sign-up" className="flex items-center">
              <img src={myImage3} alt="" className="h-[25px]" />
              <span className="ml-2">Sign Up</span>
            </Link>
          </div>

          {/* Navigation Links in Drawer */}
          <div className="flex-1 overflow-y-auto font-jak">
            <ul className="py-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </div>
  );
};

export default NavBar2;
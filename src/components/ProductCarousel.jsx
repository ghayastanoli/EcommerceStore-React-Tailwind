import React, { useState, useMemo } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import productsData from '../products.json';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Toast = ({ message, onClose }) => (
    <div className="fixed top-16 sm:top-44 right-4 bg-green-400 text-white py-2 px-4 rounded shadow-md font-jak z-40 z-100">
      {message}
      <button onClick={onClose} className="ml-4 font-jak">X</button>
    </div>
);

const ProductCarousel = () => {
  const { dispatch } = useCart();
  const [showFullDescription, setShowFullDescription] = useState({});
  const [toast, setToast] = useState(null);

  // Memoize random products so they don't change on re-render
  const randomProducts = useMemo(() => {
    return productsData.sort(() => Math.random() - 0.5).slice(0, 10);
  }, []); // Empty dependency array ensures it runs only once

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const toggleDescription = (id) => {
    setShowFullDescription((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      },
    });
    setToast(`${product.title} added to cart!`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="max-w-[1350px] m-auto w-[100%]">
      <div className="px-4 sm:px-12 mb-12 ">
        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
        <div className="p-6 flex justify-center sm:justify-normal">
          <h2 className="flex justify-start rounded-md mt-8 font-mont  text-md  sm:text-2xl md:text-3xl text-slate-600 font-normal">
            Featured Products
          </h2>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px px-4"
        >
          {randomProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="border rounded-lg shadow-md p-4 bg-orange-100 hover:bg-orange-200 transition duration-200 h-full font-jak">
                <div className="flex justify-center">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="object-contain h-[200px] w-[200px] rounded-md"
                  />
                </div>
                <div className="px-1 py-4">
                  <div className="min-h-[60px]">
                    <h2 className="text-[20px] font-semibold mt-2 tracking-normal">{product.title}</h2>
                  </div>
                  <div className="min-h-[90px]">
                    <h4 className="text-md font-normal mt-2 min-h-[80px]">
                      {!showFullDescription[product.id]
                        ? product.description.substring(0, 70) + '...'
                        : product.description}
                    </h4>
                    {/* <button
                      className="text-orange-500 underline mt-1"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDescription(product.id);
                      }}
                    >
                      {showFullDescription[product.id] ? 'Show Less' : 'Read More'}
                    </button> */}
                  </div>
                  <p className="text-gray-700 text-md pt-3">Price: {product.price} $</p>
                  <p className="text-gray-700 text-md">
                    You Save: <span className="font-semibold">{product.discountPercentage}%</span>
                  </p>
                </div>
                <div className="flex">
                  <button
                    className="bg-orange-500 text-white px-4 py-2 text-sm rounded-md mt-3"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarousel;
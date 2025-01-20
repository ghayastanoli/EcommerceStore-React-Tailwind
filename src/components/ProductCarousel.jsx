import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import productsData from '../products.json';
import { Link } from 'react-router-dom';

const ProductCarousel = () => {
  const [showFullDescription, setShowFullDescription] = useState({});

  // Get 10 random products from all categories
  const randomProducts = productsData
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

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

  return (
    <div className="px-11 mb-12">
      <div className="font-mont text-3xl text-slate-600 px-4 font-normal py-8 pt-6 ">
        <h2 className="">
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
            <div className="border rounded-lg shadow-md p-4 bg-orange-100 font-jak hover:bg-orange-200 transition duration-200 h-full">
              <div className="flex justify-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="object-contain h-[200px] w-[200px] rounded-md"
                />
              </div>
              <div className="px-1 py-4">
                <div className="min-h-[60px]">
                  <h2 className="text-xl font-semibold mt-2 tracking-wide">
                    {product.title}
                  </h2>
                </div>
                <div className="min-h-[90px]">
                  <h4 className="text-md font-normal mt-2 min-h-[80px]">
                    {!showFullDescription[product.id]
                      ? product.description.substring(0, 70) + '...'
                      : product.description}
                  </h4>
                  <button
                    className="text-orange-500 underline mt-1"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDescription(product.id);
                    }}
                  >
                    {showFullDescription[product.id] ? 'Show Less' : 'Read More'}
                  </button>
                </div>
                <p className="text-gray-700 text-md pt-3">
                  Price: {product.price} $
                </p>
                <p className="text-gray-700 text-md">
                  You Save:{' '}
                  <span className="font-semibold">
                    {product.discountPercentage}%
                  </span>
                </p>
              </div>
              <div className="flex">
                <button
                  className="bg-orange-500 text-white px-4 py-2 text-sm rounded-md mt-3"
                  onClick={(e) => e.preventDefault()}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
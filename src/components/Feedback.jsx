import React, { useState } from "react";

const Feedback = () => {
  const [showModal, setShowModal] = useState(false);

  const MyModal = () => {
    return (
      <>
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)} // Close modal on background click
        >
          <div
            className="w-[90%] max-w-[50%] min-w-[320px] min-h-[80px] h-[60%] bg-white p-6 rounded-lg shadow-lg relative font-jak flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()} // Prevent click event from closing modal
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-red-600 font-semibold text-lg"
            >
              ✖
            </button>
            <h3 className="text-md xm:text-lg font-semibold text-gray-800 mb-4 text-center">
              What do you think about us?
            </h3>
            <textarea
              name="feedback"
              id="feedback"
              className="w-full h-full max-h-[70%] text-sm sm:text-md border border-gray-300 rounded-md p-2 resize-none"
              placeholder="Write your feedback here..."
            ></textarea>
            <button
              className="bg-orange-500 text-white px-8 py-2 rounded hover:bg-orange-600 mx-auto mt-4"
              onClick={() => setShowModal(false)}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="py-5 pt-10">
        <div className="bg-orange-200">
          <div className="py-10">
            <div className="flex justify-center">
              <h3 className="text-md font-jak">We'd love to hear what you think!</h3>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="text-md font-jak rounded-2xl px-12 font-bold tracking-wide py-2 mt-4 bg-white  hover:bg-orange-400 transition duration-200 hover:text-white"
              >
                Give Feedback
              </button>
            </div>
            {showModal && <MyModal />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
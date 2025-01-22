import React, { useState } from 'react'


const Feedback = () => {
    const [showModal, setShowModal] = useState(false);

    const MyModal = () => {
        return (
            <>
            <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50'>
                <div className='max-w-[1350px] m-auto w-[100%]'>
            <div className='bg-white w-96 p-6 rounded-lg shadow-lg relative font-jak'>
            <h3 className='text-lg font-semibold text-gray-800 mb-4'>What do you think about us?</h3>
            <textarea
                        name="feedback"
                        id="feedback"
                        className="w-full min-h-20 h-40 max-h-60 max border border-gray-300 rounded-md p-2 mb-4"
                        placeholder="Write your feedback here..."
                    ></textarea>
            <button onClick={() => setShowModal(false)} className='absolute top-2 right-2 text-slate-500 hover:text-red-600 font-semibold'> Close</button>
            <button
                        className="bg-orange-500 text-white px-8 py-2 rounded hover:bg-orange-600"
                        onClick={() => setShowModal(false)}
                    >
                        Submit
                    </button>
            </div>
            </div>
            </div>
            </>
        )
    }
  return (
    <>
    <div>
        <div className='bg-orange-200'>
            <div className=' py-10'>
                <div className='flex justify-center'>
                    <h3 className='text-md font-jak'>We'd love to hear what you think!</h3>
                </div>
                <div className='flex justify-center'>
                    <button onClick={() => setShowModal(true)} type='button' className='text-md font-jak rounded-2xl px-12 font-bold tracking-wide py-2 mt-4 bg-white border-1 border-slate-800 hover:bg-orange-400 transition duration-200 hover:text-white'>Give Feedback</button>
                </div>
                <div>
                   {showModal && <MyModal/> } 
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Feedback
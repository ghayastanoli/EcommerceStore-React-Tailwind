import React from 'react'

const Feedback = () => {
  return (
    <>
    <div>
        <div className='bg-orange-200'>
            <div className=' py-10'>
                <div className='flex justify-center'>
                    <h3 className='text-md font-jak'>We'd love to hear what you think!</h3>
                </div>
                <div className='flex justify-center'>
                    <button type='button' className='text-md font-jak rounded-2xl px-12 font-bold tracking-wide py-2 mt-4 bg-white border-1 border-slate-800 hover:bg-orange-400 transition duration-200 hover:text-white'>Give Feedback</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Feedback
import React from 'react'

export default function Fund() {
    return (
        <>

            <div className='bg-black mt-12 pt-5 pb-7'>
                <div className='text-white'>
                    <h1 className='font-bold text-5xl text-center'>
                        Your Fund is Your to Keep
                    </h1>
                    <p className='font-medium text-xl text-center mt-1'>
                        No success Fee, like other crowdfunding platform
                    </p>
                </div>

                <div className="btn flex justify-center mt-4">
                    <button className='bg-white text-black p-3  rounded-full mx-2'>Get Started</button>
                    <button className='bg-black text-white p-3 rounded-full border border-white'>Learn More</button>
                </div>
            </div>

        </>
    )
}

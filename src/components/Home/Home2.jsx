import React from 'react';
import maksim from "../../assets/maksim.jpg";

export default function Home2() {
    return (
        <>
            <div className="home flex">
                {/* Left Section */}
                <div className=' lg:w-1/2 lg:flex lg:items-center lg:flex-col lg:p-4 lg:pt-24'>
                    <p className='mx-4 text-xl text-black font-bold lg:mb-2 lg:text-5xl lg:text-white'>Welcome to Eqlize Now.</p>
                    <h3 className='font-semibold text-white mx-4 pt-2 lg:font-mono lg:mb-8 lg:text-sm lg:text-white'>
                        Crowdfund your future
                    </h3>
                    <p className='text-sm text-white mx-4 pt-5 lg:text-lg lg:text-white
                    '>
                        Fund your new home, college, start-up, or anything important
                    </p>
                    <div className=''>
                        <button className='bg-black text-white text-xs  rounded-md mx-5 mt-3 p-2  lg:cursor-copy lg:p-1  lg:rounded-lg lg:bg-blue-500 lg:text-white lg:my-3 lg:font-bold'>Get started</button>
                    </div>
                    <p className='text-base mx-4 text-white mt-2 lg:text-white lg:text-sm lg:font-extralight'>Back a campaign to launch yours for free.</p>
                    <button className='bg-black text-white p-2 mt-2 mx-9  border-white rounded-xl font-thin lg:p-2 lg:mt-4 lg:border lg:rounded-2xl'>Got an Invite?</button>
                </div>

                {/* Right Section */}
                {/* <div className="imageSectio w-1/2 flex justify-center items-center p-14">
                    <img className='w-full h-full' src={maksim} alt="hero_section_image" />
                </div> */}
            </div>
        </>
    );
}

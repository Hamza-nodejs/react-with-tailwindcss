import React from 'react';
import maksim from "../../assets/maksim.jpg";

export default function Home2() {
    return (
        <>
            <div className="home flex">
                {/* Left Section */}
                <div className=' w-1/2 flex items-center flex-col p-4 pt-24'>
                    <p className=' mb-2 text-5xl text-white'>Welcome to Eqlize Now.</p>
                    <h3 className='font-mono mb-8 text-2xl text-white'>
                        Crowdfund your future
                    </h3>
                    <p className='text-lg text-white
                    '>
                        Fund your new home, college, start-up, or anything important
                    </p>
                    <button className='cursor-copy p-2 rounded-lg bg-blue-500 text-white my-3 font-bold'>Get started</button>
                    <p className='text-white text-sm font-extralight'>Back a campaign to launch yours for free.</p>
                    <button className='bg-black text-white p-2 mt-4 border border-white rounded-2xl'>Got an Invite?</button>
                </div>

                {/* Right Section */}
                {/* <div className="imageSectio w-1/2 flex justify-center items-center p-14">
                    <img className='w-full h-full' src={maksim} alt="hero_section_image" />
                </div> */}
            </div>
        </>
    );
}

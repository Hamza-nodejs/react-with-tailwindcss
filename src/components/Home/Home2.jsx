import React from 'react';
import maksim from "../../assets/maksim.jpg";

export default function Home2() {
    return (
        <>
            <div className="home flex">
                {/* Left Section */}
                <div className=' w-1/2 flex items-center flex-col p-6 pt-24'>
                    <p className='mb-6 text-5xl text-slate-400'>Welcome to Eqlize Now.</p>
                    <h3 className='font-extrabold mb-8 text-3xl'>
                        Crowdfund your future
                    </h3>
                    <p className='text-xl
                    '>
                        Fund your new home, college, start-up, or anything important
                    </p>
                    <button className='p-4 rounded-lg bg-blue-500 text-white my-4'>Get started</button>
                    <p>Back a campaign to launch yours for free.</p>
                    <button className='bg-black text-white cursor-pointer p-2 mt-4'>Got an Invite?</button>
                </div>

                {/* Right Section */}
                {/* <div className="imageSectio w-1/2 flex justify-center items-center p-14">
                    <img className='w-full h-full' src={maksim} alt="hero_section_image" />
                </div> */}
            </div>
        </>
    );
}

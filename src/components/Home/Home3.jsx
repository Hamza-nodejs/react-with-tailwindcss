import React from 'react'
import logo from "../../assets/logo.png"

export default function Home3() {
    return (
        <>
            <div className="h2 flex flex-col">
                <h2 className='text-center size-18 font-extrabold'>
                    Our Campaign Streams
                </h2>
                <p className='text-center font-medium'>
                    Launch your campaign by joining a stream that aligns with your budget and growth goals.
                </p>
            </div>

            <div className="chains flex flex-row justify-around mt-28">
                <div className='flex flex-row space-x-28'>
                    <div className="image">
                        <img className='w-20 rounded-3xl' src={logo} alt="_chain_logo" />
                    </div>
                    <div className='p-2'>
                        <h3>
                            steady
                        </h3>
                        <p>
                            Hosting Fees: $10
                        </p>
                    </div>
                </div>

                <div>
                    <button type="button" class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Join</button>
                </div>

            </div>
        </>
    )
}

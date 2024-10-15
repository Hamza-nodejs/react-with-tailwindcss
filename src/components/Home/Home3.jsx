import React from 'react'
import logo from "../../assets/logo.png"

export default function Home3({ chainName, feeHosting, btnText }) {
    return (
        <>
            <div className="chains flex flex-row justify-around mt-24">
                <div className='flex flex-row space-x-28'>
                    <div className="image">
                        <img className='w-20 rounded-3xl' src={logo} alt="_chain_logo" />
                    </div>
                    <div className='p-2'>
                        <h3 className='font-bold'>
                            {chainName}
                        </h3>
                        <p>
                            Hosting Fees: ${feeHosting}
                        </p>
                    </div>
                </div>

                <div className='mt-5'>
                    <button type="button" class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{btnText}</button>
                </div>

            </div>
        </>
    )
}

import React from 'react'
import getAppRight from "../../assets/getAppRight.svg"

export default function Download() {
    return (
        <>
            <div className='main mt-24 flex'>
                <div className='left w-1/2 flex flex-col items-center'>
                    <h1 className='font-bold text-5xl p-14'>
                        Download the apps!
                    </h1>

                    <p className='text-justify p-16 font-serif text-2xl'>
                        The mobiles app offers a convient way to market your campaign, keep an eye on your wallet
                        , chat with your brackers, scan QR codes, and more. Don"t miss out, download the app today!
                    </p>

                </div>

                <div className='right w-1/2 flex flex-col items-center '>
                    <img src={getAppRight} alt="download_app_logo" />

                </div>
            </div>

        </>
    )
}

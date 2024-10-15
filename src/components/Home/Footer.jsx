import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <>

            <div className='bg-black flex justify-around p-2'>
                <div className="left text-white">
                    <a className="mx-3 font-bold text-sm" href="https://yahoo.com">Privacy Policy</a>
                    <a className="mx-3 font-bold text-sm" href="https://yahoo.com">terms of use</a>
                    <a className="font-bold text-sm" href="https://yahoo.com">Contact us</a>
                </div>

                <div className="center text-white">
                    <p>© 2024 Powered by Skipfour. All rights reserved.</p>
                </div>

                <div className="social">
                    <div className='flex flex-row'>
                        <div className='mx-2'>
                            < BsFacebook />
                        </div>
                        <div className='mx-2'>
                            <FaLinkedinIn />
                        </div>
                        <div>
                            <FaXTwitter />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

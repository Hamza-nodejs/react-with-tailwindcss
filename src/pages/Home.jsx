import React from 'react'
import Banner from "../components/Banner"
import NavBar from '../components/NavBar'
import Home2 from '../components/Home2'
import mountainImage from "../assets/mountainImage.jpg";

export default function Home() {
    return (
        <>
            <div
                className='relative h-screen bg-cover bg-center'
                style={{ backgroundImage: `url(${mountainImage})` }}
            >
                <div className='absolute inset-0 bg-gradient-to-b from-white/30 to-white/0'></div>
                <Banner />
                <NavBar />
                <Home2 />
            </div>
        </>
    )
}

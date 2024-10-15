import React from 'react'
import Banner from "../components/Home/Banner"
import NavBar from '../components/NavBar'
import Home2 from '../components/Home/Home2'
import mountainImage from "../assets/mountainImage.jpg";
import Home3 from '../components/Home/Home3';

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
                <Home3 />
            </div>
        </>
    )
}

import React from 'react'
import Banner from "../components/Home/Banner"
import NavBar from '../components/NavBar'
import Home2 from '../components/Home/Home2'
import mountainImage from "../assets/mountainImage.jpg";
import Home3 from '../components/Home/Home3';
import Campaign from '../components/Home/Campaign';
import SecondBanner from '../components/Home/SecondBanner';

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
                <Campaign />
                <Home3 chainName="Steady" feeHosting="10" btnText="JOIN" />
                <Home3 chainName="Turbo" feeHosting="100" btnText="JOIN" />
                <Home3 chainName="Flash" feeHosting="1000" btnText="JOIN" />
                <Home3 chainName="Hypersonic" feeHosting="5000" btnText="JOIN" />
                <SecondBanner />


            </div>
        </>
    )
}

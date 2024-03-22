import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import meetlogo from './meetlogo.jpeg';
import anilogo from './anilogo.gif';
import worlogo from './worlogo.gif';
import girl from './girllogo.gif';

function Home() {
    return (
        <div>
            <div className='flex justify-between flex-col md:flex-row'>
                <div className='flex gap-10'>
                    <img src={logo} alt="logo" className='w-40 ml-16 mt-4 cursor-pointer'></img>
                    <p className='mt-11 ml-10 text-xl font-mono hover:text-[#9F47F7]  cursor-pointer drop-shadow-2xl'>Docs</p>
                    <p className='mt-11 ml-10 text-xl font-mono hover:text-[#9F47F7] cursor-pointer'>Pricing</p>
                    <p className='mt-11 ml-10 text-xl font-mono hover:text-[#9F47F7] cursor-pointer'>Community</p>
                    <p className='mt-11 ml-10 text-xl font-mono hover:text-[#9F47F7] cursor-pointer'>About</p>
                </div>
                <div>
                    <Link to="/signup">
                        <p className="flex justify-end">
                            <button className="bg-[#9F47F7] px-12 py-3 mt-8 mr-16 rounded-2xl text-lg font-bold text-white font-mono hover:rounded-full transition-all duration-700 ease-in ">Step on →</button>
                        </p>
                    </Link>
                </div>

            </div>
            <div className='flex flex-col justify-center items-center gap-6 z-20 mt-28'>
                <p className='text-7xl font-mono font-bold z-10 '>Where Creativity Thrives.</p>
                <p className='text-3xl'>Step into Web3 Meetings</p>
                <Link to="/signup">
                    <p className="flex justify-end">
                        <button className="bg-[#9F47F7] px-16 py-4 mt-8 ml-18 text-white rounded-2xl text-xl font-bold font-mono hover:rounded-full z-20">Step on →</button>
                    </p>
                </Link>
                <img src={meetlogo} alt='meetlogo' className='z-0 w-[45%] rounded-3xl absolute mt-[35%] h-[50%]' />
                <img src={anilogo} alt='anilogo' className='z-30 absolute mt-[20%] mr-[55%] w-[22%]' />
                <img src={worlogo} alt='anilogo' className='z-30 absolute mr-[65%] ml-[120%] mt-[45%]' />
                <img src={girl} alt='girl' className='z-30 absolute ml-[75%]' />
                <p className='z-30 mt-[65%] absolute font-bold font-mono ml-[90%]'>-Made in NCF</p>

            </div>

        </div>
    );
}

export default Home;

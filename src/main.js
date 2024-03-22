import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';
import profile from './profile.png';
import settings from './settings.png';
import Video from './video.jpg';
import Audio from './audio.jpeg';
import Edit from './edit.png';


function Main() {
    const location = useLocation();
    const { account } = location.state || {};
    const [content, setContent] = useState(<ProfileContent />);

    const handleSidebarClick = (content) => {
        setContent(content);
    };

    return (
        <div className='flex h-screen'>
            {/* Sidebar */}
            <div className="flex-shrink-0 w-44 bg-gray-200 border-solid border-2 overflow-y-auto">
                <div className='flex flex-col gap-10 p-4'>
                    <img src={logo} alt="logo" className='w-28 h-20 cursor-pointer'></img>
                    <p onClick={() => handleSidebarClick(<ProfileContent />)} className="p-2 hover:bg-gray-300 cursor-pointer">Profile</p>
                    <p onClick={() => handleSidebarClick(<MeetingsContent />)} className="p-2 hover:bg-gray-300 cursor-pointer">Meetings</p>
                    <Link to="/message" className="p-2 hover:bg-gray-300">Message</Link>
                    <Link to="/recordings" className="p-2 hover:bg-gray-300">Recordings</Link>
                    <p onClick={() => handleSidebarClick(<ScheduleContent />)} className="p-2 hover:bg-gray-300 cursor-pointer">Schedule</p>
                    <Link to="/settings" className="p-2 hover:bg-gray-300">Settings</Link>
                    <div className='absolute bottom-4 ml-8'>
                        <img src={settings} alt="settings" className='w-10' />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='flex flex-col flex-grow'>
                {/* Navbar */}
                <div className="flex justify-between items-center bg-[#9F47F7] p-4">
                    <div className="flex items-center gap-10">
                        <p className='ml-4 text-xl font-mono hover:text-white cursor-pointer'>Docs</p>
                        <p className='ml-4 text-xl font-mono hover:text-white cursor-pointer'>Pricing</p>
                        <p className='ml-4 text-xl font-mono hover:text-white cursor-pointer'>Community</p>
                        <p className='ml-4 text-xl font-mono hover:text-white cursor-pointer'>About</p>
                    </div>
                    <div className="flex items-center">
                        {account && (
                            <p className='font-mono hover:text-white text-sm'>{account}</p>
                        )}
                        <img src={profile} alt="profile" className='w-12 h-12 ml-4' />
                    </div>
                </div>
                {/* Content */}
                <div className="flex-grow flex ">
                    {content}
                </div>
            </div>
        </div>
    );
}

const ProfileContent = () => {
    const location = useLocation();
    const { account } = location.state || {};
    return (
        <div className='flex flex-col'>
            <div className="flex">
                <img src={profile} alt="profile" className='mt-[11%] ml-[10%] w-[20%] h-[60%]' />
                <div className="">
                    <p className="font-mono text-xl font-bold mt-[28%] ml-[30%]">{account}</p>
                    {/* Add your wallet address here */}
                    <p className="font-mono font-bold text-sm  ml-[30%] ">Wallet Address: 0x... (example)</p>
                    <img src={Edit} alt="edit" className='w-3 h-3 ml-[30%] mt-[6%]' />
                    <p className="font-mono font-bold text-sm ml-[30%]">edit</p>

                </div>

            </div>
            <p className="font-mono font-bold text-lg mt-[8%] ml-[10%] border-solid border-2 rounded-md py-3 px-4 w-[140%] bg-[#efefef]">Personal</p>
            <div className='flex flex-col'>
                <div className="flex">
                    <p className='font-mono text-lg ml-[15%] mt-[4%]'>Phone</p>
                    {/* Add your paragraph next to "Phone" here */}
                    <p className='font-mono text-lg ml-[30%] mt-[4%] text-[#766B6B]'>Not set</p>
                </div>
                <div className="flex">
                    <p className='font-mono text-lg ml-[15%] mt-[4%] '>Language</p>
                    {/* Add your paragraph next to "Phone" here */}
                    <p className='font-mono text-lg ml-[26.5%] mt-[4%] text-[#766B6B]'>தமிழ்</p>
                </div>
                <div className="flex">
                    <p className='font-mono text-lg ml-[15%] mt-[4%]'>Time Zone</p>
                    {/* Add your paragraph next to "Phone" here */}
                    <p className='font-mono text-lg ml-[25%] mt-[4%] text-[#766B6B]'>(GMT+5:30) India</p>
                </div>
                <div className="flex">
                    <p className='font-mono text-lg ml-[15%] mt-[4%]'>Date Fromat</p>
                    {/* Add your paragraph next to "Phone" here */}
                    <p className='font-mono text-lg ml-[23.5%] mt-[4%] text-[#766B6B]'>mm/dd/yyyy Example: 03/17/2024</p>
                </div>
                <div className="flex">
                    <p className='font-mono text-lg ml-[15%] mt-[4%]'>Time Format</p>
                    {/* Add your paragraph next to "Phone" here */}
                    <p className='font-mono text-lg ml-[23.5%] mt-[4%] text-[#766B6B]'>Use 12-hour time (Example: 02:00 PM)</p>
                </div>
                
            </div>
           
        </div>
    );
};


const MeetingsContent = () => {
    return (
        <div className="flex flex-col ">
            <div className="flex mb-4">
                <div className="flex flex-col items-center">
                    <img src={Video} alt="Meetings" className="w-[90%] h-[50%] ml-[8%] mt-[10%] rounded-xl" />
                    <Link to='/App'>
                        <button className="bg-[#9F47F7] hover:bg-blue-700 text-white text-xl font-mono font-bold py-2 px-4 rounded-xl mt-12">Video Space</button>
                    </Link>
                </div>
                <div className="flex flex-col items-center ml-8">
                    <img src={Audio} alt="Meetings" className="w-[90%] h-[50%] ml-[8%] mt-[10%] rounded-xl" />
                    <button className="bg-[#9F47F7] hover:bg-blue-700 text-white text-xl font-mono font-bold py-2 px-4 rounded-xl mt-12">Audio Space</button>
                </div>
            </div>
        </div>
    );
};

const ScheduleContent = () => {
    return (
        <div>
            <p className='font-mono font-bold text-5xl mt-[10%] ml-32'>Lock in Time..</p>
            <div className="flex justify-between w-[70%] mt-8 ml-32 gap-4">
                <button className='bg-[#9F47F7] text-xl py-4 font-mono font-bold rounded-2xl hover:text-white hover:bg-black'>Schedule Meet</button>
                <button className='bg-[#9F47F7] text-xl font-mono font-bold rounded-2xl hover:text-white hover:bg-black'>View Scheduled Meets</button>
            </div>
        </div>
    );
};



export default Main;

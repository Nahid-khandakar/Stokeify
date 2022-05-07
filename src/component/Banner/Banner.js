import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div className='bg-gray-800'>
            <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                    <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                        <button className="w-3 h-3 mx-2 bg-amber-500 rounded-full lg:mx-0 focus:outline-none"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-amber-500"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-amber-500"></button>
                        <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-amber-500"></button>
                    </div>

                    <div className="max-w-lg lg:mx-12 lg:order-2">
                        <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-5xl">Welcome To Stokeify</h1>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">In stokeify we stock different computer parts and manage those stock parts . Generally we stock computer hard disk, desktop monitor, motherboard,printer, processor , ram ,GPU ect </p>
                        <div className="mt-6">
                            <Link to="#" className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-amber-600 rounded-md lg:inline hover:bg-gray-700">Know More</Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img src={"https://i.ibb.co/h11yFQt/gpu.jpg"} className="object-cover w-full h-full max-w-3xl rounded-md" />

                </div>
            </div>
        </div>
    );
};

export default Banner;
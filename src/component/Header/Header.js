import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (


        <header className="bg-white dark:bg-gray-800">
            <nav className="bg-white dark:bg-gray-800">
                <div className="container p-6 mx-auto">

                    <Link className="block text-2xl font-bold text-center text-amber-500 dark:text-amber lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/">Stokeify</Link>

                    <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
                        <Link to="/home" className="text-gray-800 dark:text-gray-200 border-b-2 border-amber-500 mx-1.5 sm:mx-6">home</Link>

                        <Link to="/inventory" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">Inventory</Link>

                        <Link to="/manageinvetory" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">Manage Inventory</Link>

                        <Link to="/myitem" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">My Item</Link>

                        <Link to="/blog" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">blog</Link>

                        <Link to="/add one" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">add one</Link>

                        <Link to="login" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">Log in</Link>

                    </div>
                </div>
            </nav>

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
                            <Link to="#" className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-amber-600 rounded-md lg:inline hover:bg-amber-700">Know More</Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img src="https://i.ibb.co/h11yFQt/gpu.jpg" className="object-cover w-full h-full max-w-3xl rounded-md" />

                </div>
            </div>
        </header>
    );
};

export default Header;
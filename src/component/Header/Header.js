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

                        <Link to="/manageinvetory" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">Manage Inventory</Link>

                        <Link to="/myitem" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">My Item</Link>

                        <Link to="/blog" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">blog</Link>

                        <Link to="/add one" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">add one</Link>

                        <Link to="login" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">Log in</Link>

                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;
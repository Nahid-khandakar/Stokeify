import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='bg-gray-900 py-10'>


            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover w-full h-full" src="https://i.ibb.co/FmSBfB3/error.jpg" alt="avatar" />

                <div className="py-5 text-center">
                    <h1 className="block text-4xl font-bold text-gray-800 dark:text-white">404 !!!</h1>

                    <Link to='/home'>
                        <button className="px-4 py-2  mt-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-opacity-80">
                            home
                        </button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default Error404;
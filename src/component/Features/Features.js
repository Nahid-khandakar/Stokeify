import React from 'react';

import { MdOutlineLocalFireDepartment } from 'react-icons/md';
import { FaUserShield } from 'react-icons/fa';
import { HiPuzzle } from 'react-icons/hi';
import { AiOutlineArrowRight } from 'react-icons/ai';


const Features = () => {
    return (
        <div>



            <section className=":bg-gray-900">
                <div className="container px-8 py-10 mx-auto">
                    <h1 className="text-3xl font-bold text-amber-600 capitalize lg:text-4xl text-center ">
                        Top Features
                    </h1>

                    {/* feature 1 */}
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

                        <div className="p-8 space-y-3 border-2 border-amber-600 rounded-xl">

                            <span className="inline-block text-amber-600 text-4xl">
                                <MdOutlineLocalFireDepartment />
                            </span>

                            <h1 className="text-2xl font-semibold text-amber-600 capitalize dark:text-white">
                                Easy to update
                            </h1>

                            <p className="text-gray-500 dark:text-gray-300 text-justify">
                                A new and improved system will promote staff engagement in the process of entering and maintaining crucial data, giving them a stake in the matter while freeing up.
                            </p>

                            <a href="/" className="inline-flex p-2  capitalize transition-colors duration-200 transform bg-amber-700 rounded-full dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <div> <AiOutlineArrowRight /></div>
                            </a>

                        </div>


                        {/* feature 2 */}

                        <div className="p-8 space-y-3 border-2 border-amber-600  rounded-xl">

                            <span className="inline-block text-amber-600 text-4xl ">
                                <FaUserShield />
                            </span>

                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Secure Your data</h1>

                            <p className="text-gray-500 dark:text-gray-300 text-justify">
                                Data security is the process of protecting corporate data and preventing data loss through unauthorized access. This includes protecting your data from attacks.
                            </p>

                            <a href="/" className="inline-flex p-2  capitalize transition-colors duration-200 transform bg-amber-700 rounded-full dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <div> <AiOutlineArrowRight /></div>
                            </a>
                        </div>


                        {/* feature 3 */}
                        <div className="p-8 space-y-3 border-2 border-amber-600  rounded-xl">
                            <span className="inline-block text-amber-600 text-4xl ">
                                <HiPuzzle />
                            </span>

                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Simple and optimize</h1>

                            <p className="text-gray-500 dark:text-gray-300 text-justify">
                                Database optimization is the process of analyzing various components of the database including SQL queries and tuning them to improve database performance.
                            </p>

                            <a href="/" className="inline-flex p-2  capitalize transition-colors duration-200 transform bg-amber-700 rounded-full dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <div> <AiOutlineArrowRight /></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
};

export default Features;
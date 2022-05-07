import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const AboutUs = () => {
    return (
        <div>

            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-amber-600 capitalize lg:text-4xl dark:text-white">Our Executive Team</h1>


                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-amber-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-amber-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-amber-500 rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">


                        {/* person 1 */}
                        <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-700 dark:border-gray-700 dark:hover:border-transparent">
                            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                                src="https://i.ibb.co/n6gPtNf/ezgif-com-gif-maker.jpg" alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                                Keely Griffith
                            </h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                design director
                            </p>


                            <div className="flex mt-3 -mx-2 text-2xl">

                                <div className='mx-2 text-amber-600'>
                                    <BsFacebook />
                                </div>
                                <div className='mx-2 text-amber-600'>
                                    <BsGithub />
                                </div>
                                <div className='mx-2 text-amber-600'>
                                    <AiFillLinkedin />
                                </div>

                            </div>
                        </div>


                        {/* person 2 */}
                        <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-700 dark:border-gray-700 dark:hover:border-transparent">
                            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                                src="https://i.ibb.co/KySmpSZ/ezgif-com-gif-maker-3.jpg" alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                                Mckayla Tucker
                            </h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                design director
                            </p>


                            <div className="flex mt-3 -mx-2 text-2xl">

                                <div className='mx-2 text-amber-600'>
                                    <BsFacebook />
                                </div>
                                <div className='mx-2 text-amber-600'>
                                    <BsGithub />
                                </div>
                                <div className='mx-2 text-amber-600'>
                                    <AiFillLinkedin />
                                </div>

                            </div>
                        </div>


                        {/* person 3 */}
                        <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-700 dark:border-gray-700 dark:hover:border-transparent">
                            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                                src="https://i.ibb.co/47NvnVH/ezgif-com-gif-maker-2.jpg" alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                                Faith Harris
                            </h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                design director
                            </p>


                            <div className="flex mt-3 -mx-2 text-2xl">

                                <div className='mx-2 text-amber-600'>
                                    <BsFacebook />
                                </div>
                                <div className='mx-2 text-amber-600'>
                                    <BsGithub />
                                </div>
                                <div className='mx-2 text-amber-600'>
                                    <AiFillLinkedin />
                                </div>

                            </div>
                        </div>


                        {/* person 4 */}
                        <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-700 dark:border-gray-700 dark:hover:border-transparent">
                            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                                src="https://i.ibb.co/XYFf3DF/ezgif-com-gif-maker-4.jpg" alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                                Shawn Hayes
                            </h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                                design director
                            </p>


                            <div className="flex mt-3 -mx-2 text-2xl">

                                <div className='mx-2 text-amber-600'>
                                    <BsFacebook />
                                </div>
                                <div className='mx-2 text-amber-600'>
                                    <BsGithub />
                                </div>
                                <div className='mx-2 text-amber-600'>
                                    <AiFillLinkedin />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
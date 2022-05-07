import React from 'react';
import { RiGooglePlayLine } from 'react-icons/ri';
import { GrAppleAppStore } from 'react-icons/gr';

const DownloadApp = () => {
    return (
        <div>

            <section className="bg-gray-900">
                <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">

                    <div className="flex justify-center xl:w-1/2">
                        <img className="h-52 w-52 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
                            src="https://i.ibb.co/vjXRRDw/download-app.jpg" alt="" />
                    </div>

                    <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                        <h2 className="text-2xl font-bold tracking-tight text-amber-600 xl:text-4xl ">
                            Download our free mobile app
                        </h2>

                        <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
                            You can always connect with us. download our app from play store for android or app store for ios.
                        </p>


                        <div className="mt-6 sm:-mx-2">
                            <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">

                                <button className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-gray-600 hover:to-gray-800 sm:w-auto">

                                    <span className='text-2xl'><GrAppleAppStore /></span>
                                    <span className="mx-2">
                                        Get it on the App Store
                                    </span>
                                </button>
                            </div>

                            <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">

                                <button className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-amber-600 to-amber-700 hover:from-gray-600 hover:to-gray-800">

                                    <span className='text-2xl'> <RiGooglePlayLine /> </span>
                                    <span className="mx-2">
                                        Get it on Google Play
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DownloadApp;
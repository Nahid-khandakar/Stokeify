import React from 'react';

const AddInventory = () => {
    return (
        <div>

            <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-3xl font-semibold text-center text-amber-500 ">Add New Item</h2>
                <p className="mt-3 text-center text-gray-600 dark:text-gray-400">Give Item details carefully</p>



                <div className="mt-6 ">


                    <div className="w-full mx-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                    </div>

                    <div className="w-full mx-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Price</label>

                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                    </div>

                    <div className="w-full mx-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Quantity</label>

                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                    </div>

                    <div className="w-full mx-2 mt-4 md:mt-0">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Supplier Name</label>

                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" />
                    </div>

                    <div className="w-full mx-2 mt-4 md:mt-0">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Description</label>

                        <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-40"></textarea>
                    </div>

                    <div className="w-full mx-2">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Image link</label>

                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:amber-amber-400 focus:ring-amber-300 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                    </div>


                    <div className="flex justify-center mt-6">
                        <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add</button>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default AddInventory;
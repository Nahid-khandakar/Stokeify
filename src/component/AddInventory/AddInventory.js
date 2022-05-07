import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddInventory = () => {


    const handleAddItem = (event) => {
        event.preventDefault();
        const name = event.target.itemName.value
        const price = event.target.itemPrice.value
        const quantity = event.target.itemQuantity.value
        const supplier = event.target.supplierName.value
        const description = event.target.itemDescription.value
        const image = event.target.itemImage.value

        //

        if (price > 0 && quantity > 0) {

            //console.log(name, price, quantity, supplier, description, image)

            const data = { name, price, quantity, supplier, description, image };

            fetch('http://localhost:5000/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    toast("item add successfully")
                    event.target.reset()
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        } else {
            alert('give price and quantity positive number')
        }



    }



    return (
        <div>
            <div className='bg-gray-900 py-10' >

                <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-3xl font-semibold text-center text-amber-500 ">Add New Item</h2>
                    <p className="mt-3 text-center text-gray-600 dark:text-gray-400">For add new item,give item details carefully</p>



                    <form className="mt-6" onSubmit={handleAddItem}>

                        {/* item name */}
                        <div className="w-full mx-2">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Item name</label>

                            <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" name="itemName" required />
                        </div>

                        {/* item price */}
                        <div className="w-full mx-2">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Price</label>

                            <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" type="number" name='itemPrice' required />
                        </div>

                        {/* item quantity */}
                        <div className="w-full mx-2">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Quantity</label>

                            <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" type="number" name='itemQuantity' required />
                        </div>

                        {/* item supplier name */}
                        <div className="w-full mx-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Supplier Name</label>

                            <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 focus:ring-amber-300 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" name='supplierName' required />
                        </div>

                        {/* item description */}
                        <div className="w-full mx-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Description</label>

                            <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-amber-400 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-40" name='itemDescription' required></textarea>
                        </div>

                        {/* item image link */}
                        <div className="w-full mx-2">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Image link</label>

                            <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:amber-amber-400 focus:ring-amber-300 dark:focus:border-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" name='itemImage' required />
                        </div>


                        <div className="flex justify-center mt-6">
                            <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-amber-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-600">Add</button>

                            <ToastContainer />
                        </div>


                    </form>


                </section>
            </div>
        </div>
    );
};

export default AddInventory;
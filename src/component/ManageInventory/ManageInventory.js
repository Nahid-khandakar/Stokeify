import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventory = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    //delete item
    const handleDeleteItem = (id) => {

        const confirmDelete = window.confirm('Sure to delete')
        //console.log('clicked', id)

        if (confirmDelete) {
            const url = `http://localhost:5000/items/${id}`
            fetch(url, {
                method: 'DELETE'
            }).then(response => {
                return response.json()
            }).then(data => {
                //console.log(data.deletedCount)

                if (data.deletedCount > 0) {
                    toast("Delete Item Successful ");
                    const remainingItems = items.filter(item => item._id !== id)
                    setItems(remainingItems)
                }
            }
            );
        }

    }

    return (
        <div className='pb-10 bg-gray-900'>

            <div>

                <section className=" bg-gray-900">
                    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
                            <span className='text-amber-600'>Manage</span> stock items
                        </h2>

                        <div className="mt-6 sm:-mx-2">
                            <div className="inline-flex w-full sm:w-auto sm:mx-2">

                                <Link to="/addinvetory" className="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-amber-600 rounded-lg hover:bg-gray-700 focus:ring focus:ring-amber-300 focus:ring-opacity-80">
                                    Add New Item
                                </Link>

                            </div>


                        </div>
                    </div>
                </section>

            </div>
            {/* table */}
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-5 lg:-mx-6 xl:-mx-6">
                    <div className="inline-block min-w-full sm:px-6 lg:px-6">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">

                                <thead className="border-b bg-amber-600">
                                    <tr>
                                        <th scope="col" className="xl:text-xl  md:text-sm font-medium text-gray-50 px-6 py-4">
                                            Items Name
                                        </th>
                                        <th scope="col" className="xl:text-xl md:text-sm font-medium text-gray-50 px-6 py-4">
                                            Quantity
                                        </th>
                                        <th scope="col" className="xl:text-xl md:text-sm font-medium text-gray-50 px-6 py-4">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                {
                                    items.map(item =>

                                        <tbody key={item._id} className=''>

                                            <tr className="border-b bg-gray-900 border-gray-600" >
                                                <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                                                    {item.name}
                                                </td>
                                                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                    {item.quantity}
                                                </td>
                                                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">

                                                    <button onClick={() => handleDeleteItem(item._id)} className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-amber-500 focus:ring-opacity-80">
                                                        Delete
                                                    </button>
                                                    <ToastContainer />
                                                </td>
                                            </tr>

                                        </tbody>
                                    )
                                }


                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ManageInventory;
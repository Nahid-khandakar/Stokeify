import React, { useEffect, useState } from 'react';

const ManageInventory = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])



    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center">

                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                        Items Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                        Quantity
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            {
                                items.map(item =>

                                    <tbody key={item._id}>

                                        <tr className="border-b bg-gray-800 boder-gray-900 " >
                                            <td className="text-sm text-white font-medium px-6 py-4 whitespace-nowrap">
                                                {item.name}
                                            </td>
                                            <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                {item.quantity}
                                            </td>
                                            <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">

                                                <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                                    Delete
                                                </button>

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
    );
};

export default ManageInventory;
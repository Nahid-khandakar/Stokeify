import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

import { CgNametag } from 'react-icons/cg';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { BsFillPersonCheckFill } from 'react-icons/bs';


const MyItem = () => {

    const [user] = useAuthState(auth);


    const [items, setItems] = useState([])


    useEffect(() => {
        const email = user.email
        const url = `http://localhost:5000/items/?email=${email}`
        console.log(email, url)
        fetch(url, {
            'authorization': `${user.email} ${localStorage.getItem("accessToken")}`
        })
            .then(res => res.json())
            .then(data => setItems(data))

    }, [user])


    //delete item
    const handleDeleteItem = (id) => {

        const confirmDelete = window.confirm('Sure to delete')
        console.log('clicked', id)
        if (confirmDelete) {

            const url = `http://localhost:5000/items/${id}`
            fetch(url, {
                method: 'DELETE'
            }).then(response => {
                return response.json()
            }).then(data => {
                //console.log(data.deletedCount)

                if (data.deletedCount > 0) {

                    const remainingItems = items.filter(item => item._id !== id)
                    setItems(remainingItems)
                }
            }
            );
        }

    }


    return (
        <div className='bg-gray-900 min-h-screen'>
            <h1 className='text-4xl font-bold text-center pt-6 text-amber-600'>My Items : {items.length}</h1>

            <div className="grid  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ">
                {
                    items.map(item => <div>



                        <div className='my-6'>

                            <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <img className="object-cover object-center w-full h-56" src={item.image} alt="avatar" />

                                <div className="flex items-center px-6 py-3 bg-gray-600">


                                    <h1 className='text-3xl text-white fill-current '>
                                        <CgNametag />
                                    </h1>

                                    <h1 className="mx-3 text-lg font-semibold text-white">{item.name}</h1>

                                </div>

                                <div className="px-6 py-4">
                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white"> $ {item.price}</h1>

                                    <p className="py-2 text-gray-700 dark:text-gray-400 text-justify">{item.description}</p>

                                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                                        <h1 className='text-xl'>
                                            <RiArrowUpDownFill />
                                        </h1>

                                        <h1 className="px-2  text-base">{item.quantity} </h1>
                                    </div>

                                    <div className="flex items-center mt-3 text-gray-700 dark:text-gray-200">
                                        <h1 className='text-xl'>
                                            <BsFillPersonCheckFill />
                                        </h1>

                                        <h1 className="px-2  text-base"> {item.supplier} </h1>
                                    </div>

                                    <button onClick={() => handleDeleteItem(item._id)} className=" mt-3 px-6 py-2  font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                        Delete Item
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItem;
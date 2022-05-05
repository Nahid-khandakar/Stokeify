import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { CgNametag } from 'react-icons/cg';
import { RiArrowUpDownFill } from 'react-icons/ri';

import { BsFillPersonCheckFill } from 'react-icons/bs';


const InventoryCard = ({ product }) => {

    const { name, image, description, price, quantity, supplier } = product



    return (


        <div className='my-6'>

            <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover object-center w-full h-56" src={image} alt="avatar" />

                <div className="flex items-center px-6 py-3 bg-gray-900">


                    <h1 className='text-3xl text-white fill-current '>
                        <CgNametag />
                    </h1>

                    <h1 className="mx-3 text-lg font-semibold text-white">{name}</h1>

                </div>

                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white"> $ {price}</h1>

                    <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>

                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                        <h1 className='text-xl'>
                            <RiArrowUpDownFill />
                        </h1>

                        <h1 className="px-2  text-base">{quantity} </h1>
                    </div>

                    <div className="flex items-center mt-3 text-gray-700 dark:text-gray-200">
                        <h1 className='text-xl'>
                            <BsFillPersonCheckFill />
                        </h1>

                        <h1 className="px-2  text-base"> {supplier} </h1>
                    </div>


                    <div className='flex items-center mt-6'>

                        <button className="px-6 py-2  font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-600 rounded-md hover:bg-amber-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Update Stock
                        </button>

                    </div>

                </div>
            </div>

        </div>


    );
};

export default InventoryCard;
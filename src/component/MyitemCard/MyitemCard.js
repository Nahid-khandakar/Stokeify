import React from 'react';
import { CgNametag } from 'react-icons/cg';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { BsFillPersonCheckFill } from 'react-icons/bs';


const MyitemCard = ({ item }) => {

    const { _id, name, image, description, price, quantity, supplier } = item
    return (
        <div className='my-6'>

            <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover object-center w-full h-56" src={image} alt="avatar" />

                <div className="flex items-center px-6 py-3 bg-gray-600">


                    <h1 className='text-3xl text-white fill-current '>
                        <CgNametag />
                    </h1>

                    <h1 className="mx-3 text-lg font-semibold text-white">{name}</h1>

                </div>

                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white"> $ {price}</h1>

                    <p className="py-2 text-gray-700 dark:text-gray-400 text-justify">{description}</p>

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




                </div>
            </div>

        </div>
    );
};

export default MyitemCard;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { BsFillPersonCheckFill } from 'react-icons/bs';

const Inventory = () => {

    const { id } = useParams()

    const [item, setItem] = useState({})

    const [updateItem, setUpadteItem] = useState({})

    //console.log(updateItem)




    //get single item
    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])



    //put for update item
    const handleQuantity = (id) => {


        //another way
        // setItem(x => {
        //     return {
        //         ...x, quantity: x.quantity - 1
        //     }
        // })




        if (item.quantity > 0) {
            setItem({ ...item, quantity: item.quantity - 1 })


            const data = { quantity: item.quantity }
            const url = `http://localhost:5000/items/${id}`
            //console.log(url)

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }



    }




    return (


        <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">

            <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">

                <div className="lg:w-1/2">

                    <img className="h-64 bg-cover lg:rounded-lg lg:h-full" src={item.image} alt="" />

                </div>


                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">

                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                        <span className="dark:text-amber-600">{item.name}</span>
                        <br />
                        <span className="dark:text-gray-200">( ${item.price} )</span>

                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        {item.description}
                    </p>



                    <div className="flex items-center mt-2 text-gray-700 dark:text-amber-500">
                        <h1 className='text-3xl'>
                            <RiArrowUpDownFill />
                        </h1>

                        <h1 className="px-2  font-bold text-4xl ">{item.quantity} </h1>
                    </div>

                    <div className="flex items-center mt-3 text-gray-700 dark:text-gray-200">
                        <h1 className='text-xl'>
                            <BsFillPersonCheckFill />
                        </h1>

                        <h1 className="px-2  text-base"> {item.supplier} </h1>
                    </div>

                    <div className="mt-8">
                        {
                            item.quantity === 0 ?
                                <button disabled className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform  rounded-md bg-gray-700">Out of Stock</button>
                                :
                                <button onClick={() => handleQuantity(item._id)} className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-amber-700 rounded-md hover:bg-gray-700">Delivered</button>

                        }

                    </div>
                </div>

            </div>


        </section>
    );
};

export default Inventory;
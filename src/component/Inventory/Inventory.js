import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { BsFillPersonCheckFill } from 'react-icons/bs';

const Inventory = () => {

    const { id } = useParams()

    const [item, setItem] = useState({})


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


            const data = { quantity: item.quantity - 1 }
            console.log(data)
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

    //restock item
    const handleRestock = (event) => {
        event.preventDefault();
        const inputItem = event.target.quantity.value
        const addItem = parseInt(inputItem)

        if (addItem > 0) {

            setItem({ ...item, quantity: item.quantity + addItem })

            const data = { quantity: item.quantity + addItem }
            console.log(data)
            const url = `http://localhost:5000/items/${id}`


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
                    event.target.reset()
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
        else {
            alert("Add positive value")
            event.target.reset()
        }
    }




    return (

        <div>
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




            {/* input quantity amount */}
            <div className='bg-gray-100 dark:bg-gray-900  pb-10'>

                <section className="flex flex-col max-w-5xl mx-auto rounded-sm overflow-hidden shadow-lg md:flex-row md:h-48 pb-5">


                    <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800 ">
                        <div className="px-6 py-6 md:px-8 md:py-0">

                            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">

                                <span className="text-amber-600 text-2xl">Restock  </span>
                                Again
                            </h2>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
                                For restock products / Items use restock field
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 bg-white  ">


                        <form onSubmit={handleRestock}>

                            <div className="flex flex-col p-1 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-amber-500 focus-within:ring focus-within:ring-opacity-40 focus-within:border-amber-500 focus-within:ring-amber-500">


                                <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none" type="number" name="quantity" placeholder="Product / item amount" />

                                <input className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-amber-600 rounded-lg hover:bg-gray-700 " type="submit" value="Restock" />

                            </div>

                        </form>

                    </div>

                </section>


            </div>




        </div>

    );
};

export default Inventory;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {

    const { id } = useParams()

    const [item, setItem] = useState({})

    console.log(item)

    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    return (


        <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">

            <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">

                <div className="lg:w-1/2">
                    <div className="h-64 bg-cover lg:rounded-lg lg:h-full">
                        <img src={item.image} alt="" />
                    </div>
                </div>


                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"><span className="text-blue-600 dark:text-amber-600">{item.name}</span></h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        {item.description}
                    </p>

                    <div className="mt-8">
                        <Link to="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Start Now</Link>
                    </div>
                </div>

            </div>


        </section>
    );
};

export default Inventory;
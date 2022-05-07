import React, { useEffect, useState } from 'react';
import InventoryCard from '../InventoryCard/InventoryCard';

const Home = () => {
    const [items, setItems] = useState([])
    //console.log(items)

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    return (


        <div >


            <h1 className='text-4xl font-bold text-center mt-6 p-3 text-amber-600'>Stock Items</h1>

            <div className="grid  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ">
                {
                    items?.slice(0, 6).map(item => <InventoryCard
                        key={item._id}
                        item={item}
                    ></InventoryCard>)
                }
            </div>

        </div>
    );
};

export default Home;
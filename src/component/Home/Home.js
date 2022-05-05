import React, { useEffect, useState } from 'react';
import InventoryCard from '../InventoryCard/InventoryCard';

const Home = () => {
    const [products, setProducts] = useState([])
    //console.log(products)

    useEffect(() => {
        fetch('stock.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (


        <div >

            <h1 className='text-4xl font-bold text-center mt-6 p-3 text-amber-600'>Stock Items</h1>

            <div className="grid  sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  ">
                {
                    products.map(product => <InventoryCard
                        key={product.name}
                        product={product}
                    ></InventoryCard>)
                }
            </div>

        </div>
    );
};

export default Home;
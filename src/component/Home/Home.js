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

            <h1>Stock Items</h1>

            <div className="grid grid-cols-3">
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
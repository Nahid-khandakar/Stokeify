import React, { useEffect, useState } from 'react';
import InventoryCard from '../InventoryCard/InventoryCard';

const Inventory = () => {

    const [products, setProducts] = useState([])
    //console.log(products)

    useEffect(() => {
        fetch('stock.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {
                products.map(product => <InventoryCard
                    key={product.name}
                    product={product}
                ></InventoryCard>)
            }
        </div>
    );
};

export default Inventory;
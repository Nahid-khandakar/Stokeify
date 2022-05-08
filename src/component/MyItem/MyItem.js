import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import MyitemCard from '../MyitemCard/MyitemCard';


const MyItem = () => {

    const [user] = useAuthState(auth);
    console.log(user.email)

    const [items, setItems] = useState([])


    //get single item
    useEffect(() => {
        fetch('http://localhost:5000/items', {
            'authorization': `${user.email} ${localStorage.getItem("accessToken")}`
        })
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])

    return (
        <div className='bg-gray-900 min-h-screen'>
            <h1 className='text-4xl font-bold text-center pt-6 text-amber-600'>Stock Items : {items.length}</h1>

            <div className="grid  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ">
                {
                    items.map(item => <MyitemCard
                        key={item._id}
                        item={item}
                    ></MyitemCard>)
                }
            </div>
        </div>
    );
};

export default MyItem;
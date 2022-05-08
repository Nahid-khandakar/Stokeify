import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='min-h-screen bg-gray-900'>

            <div className=" flex justify-center items-center">

                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-500"></div>


            </div>

        </div>
    );
};

export default Loading;
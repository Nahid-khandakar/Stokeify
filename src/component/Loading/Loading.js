import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='min-h-full bg-gray-900'>

            <div class=" flex justify-center items-center">

                <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-500"></div>


            </div>

        </div>
    );
};

export default Loading;
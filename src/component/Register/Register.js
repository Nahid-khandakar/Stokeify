import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='py-10 bg-gray-900'>

            <div className="xl:w-1/3  p-6 m-auto  rounded-md shadow-md bg-gray-800">
                <h1 className="text-3xl font-semibold text-center text-amber-500 ">Register Here</h1>


                {/* from start here */}
                <form className="mt-6">

                    {/* userName */}
                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Username</label>



                        <input type="text" name="name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700  border rounded-md bg-gray-800 border-gray-600 focus:border-amber-300 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" required />


                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>

                        </div>



                        {/* password */}
                        <input type="password" name="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700  border rounded-md bg-gray-800 border-gray-600 focus:border-amber-300 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" required />



                    </div>

                    {/* submit button */}
                    <div className="mt-6">


                        <input type="submit" value="Register"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-600">
                        </input>

                    </div>
                </form>



                {/* go to the login page */}
                <p className="mt-8 text-l font-light text-center text-gray-100"> Already have an account?
                    <Link to="/login" className="font-medium text-gray-200 hover:underline">
                        <span className='text-amber-500 text-xl'>  Login</span>
                    </Link>
                </p>


            </div>
        </div>
    );
};

export default Register;
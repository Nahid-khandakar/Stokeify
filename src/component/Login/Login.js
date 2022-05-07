import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='py-10 bg-gray-900'>

            <div className="xl:w-1/3  p-6 m-auto  rounded-md shadow-md bg-gray-800">
                <h1 className="text-3xl font-semibold text-center text-amber-500 ">Login</h1>

                <p class="text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>


                {/* from start here */}
                <form className="mt-6">

                    {/* userName */}
                    <div>
                        <label for="username" className="block text-sm text-gray-800 dark:text-gray-200">Username</label>



                        <input type="text" name="name"
                            className="block w-full px-4 py-2 mt-2 text-gray-700  border rounded-md bg-gray-800 border-gray-600 focus:border-amber-300 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" required />


                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label for="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>


                            <a href="/" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
                        </div>



                        {/* password */}
                        <input type="password" name="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />



                    </div>

                    {/* submit button */}
                    <div className="mt-6">


                        <input type="submit" value="Login"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-600">
                        </input>

                    </div>
                </form>


                {/* line */}
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>

                    <p className="text-xs text-center uppercase text-gray-400 ">
                        or login with Social Media
                    </p>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>


                {/* google login button */}
                <div className="flex items-center mt-6 -mx-2">
                    <button type="button"
                        className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">

                        <span className='text-2xl'><AiOutlineGoogle /></span>
                        <span className="hidden mx-2 sm:inline">Login with Google</span>
                    </button>
                </div>

                {/* another line */}
                <div class="flex items-center justify-between mt-6">
                    <span class="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
                    <p class="text-xs text-gray-500 uppercase dark:text-gray-400 ">or sign up</p>
                    <span class="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
                </div>


                {/* go to the register page */}
                <p className="mt-8 text-l font-light text-center text-gray-100"> Don't have an account?
                    <Link to="/register" className="font-medium text-gray-200 hover:underline">
                        <span className='text-amber-500 text-xl'>  Register</span>
                    </Link>
                </p>


            </div>
        </div>
    );
};

export default Login;
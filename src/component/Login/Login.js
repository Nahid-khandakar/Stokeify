import React, { useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const emailRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


    //for login
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    //for find user
    const [user1] = useAuthState(auth);

    //for reset password
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    //for user
    if (user) {
        navigate(from, { replace: true });
    }

    //for loading
    if (loading) {
        return <Loading></Loading>
    }

    //for error
    let errorElement;
    if (error) {
        errorElement = <p className='text-amber-500'>Error: {error?.message}</p>

    }

    //get form data and check
    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value
        const password = event.target.password.value

        //console.log(email, password)
        signInWithEmailAndPassword(email, password)

    }

    //reset password
    const resetPassword = async () => {
        const email = emailRef.current.value
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset password link send on email')
        }
        else {
            toast('Give Email Address')
        }

    }

    //when user login
    if (user1) {
        const url = 'http://localhost:5000/login'


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { email: user.email }
            ),
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data.token);
                localStorage.setItem("accessToken", data.token)
                navigate(from, { replace: true });

            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }


    return (
        <div className='py-10 bg-gray-900'>

            <div className="xl:w-1/3  p-6 m-auto  rounded-md shadow-md bg-gray-800">
                <h1 className="text-3xl font-semibold text-center text-amber-500 ">Login</h1>

                <p className="text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>


                {/* from start here */}
                <form className="mt-6" onSubmit={handleLogin}>

                    {/* email */}
                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Username</label>





                        <input type="text" name="email" ref={emailRef}
                            className="block w-full px-4 py-2 mt-2 text-gray-100  border rounded-md bg-gray-800 border-gray-600 focus:border-amber-300 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" required />


                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>

                            {/* reset password */}
                            <button onClick={resetPassword} className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</button>
                        </div>



                        {/* password */}
                        <input type="password" name="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-100  border rounded-md bg-gray-800 border-gray-600 focus:border-amber-300 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40" required />



                    </div>

                    {/* submit button */}
                    <div className="mt-6">


                        <input type="submit" value="Login"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-600 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-600">
                        </input>

                    </div>

                    {errorElement}
                    <ToastContainer />
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
                <SocialLogin></SocialLogin>

                {/* another line */}
                <div className="flex items-center justify-between mt-6">
                    <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
                    <p className="text-xs text-gray-500 uppercase dark:text-gray-400 ">or sign up</p>
                    <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
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
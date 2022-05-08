import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';


const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    //if get user
    if (user) {
        navigate(from, { replace: true });
    }

    //if loading
    if (loading) {
        return <Loading></Loading>
    }

    //if any error
    let errorElement;
    if (error) {
        errorElement = <p className='text-amber-500'>Error: {error?.message}</p>
    }

    return (
        <div>



            <div className="flex items-center mt-6 -mx-2">

                <button type="button" onClick={() => signInWithGoogle()}
                    className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">

                    <span className='text-2xl'><AiOutlineGoogle /></span>
                    <span className="hidden mx-2 sm:inline">Login with Google</span>

                </button>

            </div>
            {errorElement}

        </div>
    );
};

export default SocialLogin;
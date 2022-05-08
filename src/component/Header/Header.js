import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';

const Header = () => {

    //for check user
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    //for sign out
    const handleSignOut = () => {
        signOut(auth);
    }

    return (

        <header className="bg-white dark:bg-gray-800">
            <nav className="bg-white dark:bg-gray-800">
                <div className="container p-6 mx-auto">

                    <Link className="block text-2xl font-bold text-center text-amber-500 dark:text-amber lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/">Stokeify</Link>

                    <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
                        <Link to="/home" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">home</Link>


                        {
                            user ?
                                <Link to="/manageinvetory" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">Manage Inventory</Link>
                                :
                                ''
                        }

                        {
                            user ?
                                <Link to="/myitem" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">My Item</Link>
                                :
                                ''
                        }




                        <Link to="/blog" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">Blog</Link>

                        <Link to="/aboutus" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">About us</Link>


                        {
                            user ?
                                <button onClick={handleSignOut} className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">Sign Out</button>
                                :
                                <Link to="login" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-amber-500 mx-1.5 sm:mx-6">Log in</Link>
                        }


                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;
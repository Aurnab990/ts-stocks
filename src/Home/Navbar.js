import React from 'react';
import { Link } from "react-router-dom";
import useFirebase from '../useFirebase';

const Navbar = () => {
    const {user, handleSignOut} = useFirebase();
    const navbar =[<>
                        <Link to={'/'}><li className='font-semibold'><a>Home</a></li></Link>
                        <Link to={'product'}><li className='font-semibold'><a>Products</a></li></Link>
                        <li className='font-semibold'><a>Contact</a></li>
                        <li className='font-semibold'><a>About</a></li>
                        <Link to={'login'}><li className='font-semibold'><a>
                        {
                                user?.uid
                                ?
                                <button onClick={handleSignOut} >Logout</button>
                                :
                                <Link as={Link} to="/login" >Login</Link>
                            }
                            </a></li></Link>
    
    
    </>]
    return (
        <div>
            <div class="navbar hover:bg-yellow-200 px-10 lg:px-24">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-secondary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    
                    <a  class=" normal-case text-2xl cursor-pointer">TS-stocks</a>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {navbar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import useFirebase from '../useFirebase';

const Header = () => {
    const {user} = useFirebase();
   
    return (
        <div>
            <div class="hero min-h-screen px-12 ">
                <div class="hero-content flex-col lg:flex-row-reverse gap-12">
                    <img src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Best T-Shirts <span className='text-yellow-400'>That Will Look Great</span></h1>
                        <p class="py-6">The humble white T-shirt is as much a wardrobe essential as a good pair of jeans. Versatile, timeless and downright cool, it's the perfect base styling piece that can seamlessly move from casual to elegant in an instant.

                        </p>
                        {
                            user?
                            <Link to={'product'}><button class="btn btn-secondary">BUY NOW</button></Link>
                            :
                            <Link to={'login'}><button class="btn btn-secondary">BUY NOW</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
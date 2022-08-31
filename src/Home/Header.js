import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import useFirebase from '../useFirebase';

const Header = () => {
    const {user} = useFirebase();
   
    return (
        <div>
            <div class="hero min-h-screen px-12 ">
                <div class="hero-content flex-col lg:flex-row-reverse gap-12">
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/61bDoqhvEPL._AC._SR360,460.jpg" class="max-w-sm rounded-lg " />
                    <div>
                        <h1 class="text-5xl font-bold">Best T-Shirts <span className='text-yellow-400'>That Will Look Great</span></h1>
                        <p class="py-6">The humble white T-shirt is as much a wardrobe essential as a good pair of jeans. Versatile, timeless and downright cool, it's the perfect base styling piece that can seamlessly move from casual to elegant in an instant.

                        </p>
                        {
                            user?
                            <Link to={'product'}><button class="btn ">BUY NOW</button></Link>
                            :
                            <Link to={'login'}><button class="btn ">BUY NOW</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
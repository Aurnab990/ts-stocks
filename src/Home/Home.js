import React from 'react';
import Carosel from './Carosel';
import Company from './Company';
import Header from './Header';
import Product from './Product';
import Review from './Review';



const Home = () => {
    return (
        <div className='px-24'>
            <Header></Header>
            <h1 className='text-center text-4xl mb-5 lg:mb-10 font-semibold'>Our <span className='text-yellow-500'>Collaboration with</span></h1>
            <Company></Company>
            <h1 className='text-center text-4xl mb-5 lg:mb-10 font-semibold'>Our Best <span className='text-yellow-500'>Products</span></h1>
            <Product></Product>
            <h1 className='text-center text-4xl mb-5 lg:mb-10 font-semibold mt-10 lg:mt-24'>Our Best <span className='text-yellow-500'>Design</span></h1>
            <Carosel></Carosel>
            <h1 className='text-center text-4xl mb-5 lg:mb-10 font-semibold mt-10 lg:mt-24'>Some customer <span className='text-yellow-500'>Reviews</span></h1>
            <Review></Review>
        </div>
    );
};

export default Home;
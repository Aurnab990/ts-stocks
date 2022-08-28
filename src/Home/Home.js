import React from 'react';
import Header from './Header';
import Product from './Product';



const Home = () => {
    return (
        <div className='px-24'>
            <Header></Header>
            <h1 className='text-center text-4xl mb-5 lg:mb-10 font-semibold'>Our Best <span className='text-yellow-500'>Products</span></h1>
            <Product></Product>
        </div>
    );
};

export default Home;
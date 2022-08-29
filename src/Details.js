import React, { useEffect, useState } from 'react';

const Details = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div>
            {
                product.map(products => <div class="hero min-h-screen px-32 gap-5">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={products.img} class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-bold">{products.name}</h1>
                            <p class="py-6">{products.description}</p>
                            <div class="card-actions justify-start">
                                <input className='bg-red-400 cursor-pointer border-2 font-bold w-1/5' type='submit' value="-"></input>
                                <input className='bg-green-400 cursor-pointer border-2 font-bold w-1/5' type='submit' value="+"></input>
                                <div class="badge badge-outline">Stocks: {products.stocks}</div>
                                <div class="badge badge-outline">${products.price}</div>
                            </div>
                            <div className='grid grid-cols-1 lg: grid-cols-2 gap-10 mt-10'>
                                <button class="btn btn-primary">Delivered</button>
                                <div className='  btn btn-secondary text-center'>BUY NOW</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Details;
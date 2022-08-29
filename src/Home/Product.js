import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details';
import useFirebase from '../useFirebase';

const Product = () => {
    const [product, setProduct] = useState([]);
    const {user} = useFirebase();
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {
                product.map(products => <p>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={products.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                {products.name}
                                <div class="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{products.description.slice(0,60)}</p>
                            <div>
                                
                            </div>
                            <div class="card-actions justify-end">
                            
                                <div class="badge badge-outline">Fashion</div>
                                <div class="badge badge-outline">Stocks: {products.stocks}</div>
                                <div class="badge badge-outline">${products.price}</div>
                                {
                                    user?
                                    <Link className='  btn btn-secondary w-full text-center' to={'/product'}>BUY NOW</Link>
                                    :
                                    <Link className='  btn btn-secondary w-full text-center' to={'/login'}>BUY NOW</Link>
                                }
                            </div>
                        </div>
                    </div>
                    
                </p>)
                
            }
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import useFirebase from './useFirebase';
import { Link } from "react-router-dom";

const Myitems = () => {
    const [product, setProduct] = useState([]);
    const {user} = useFirebase();

    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);
    const handleDelete = id =>{
        const proceed = window.confirm("Are you sure to Delete?");
        if(proceed){
            console.log("Deleting user id:", id);
            const url = `https://localhost:5000/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainingItems = product.filter(users => users._id !== id);
                setProduct(remainingItems);
            })
        }
    }
    return (
        <div className='mt-24 px-24'>
            {
                product.map(products =><div>
                    <div class="card w-full shadow-xl grid grid-cols-1 lg:grid-cols-2">
                        <figure><img style={{"width":"250px"}} src={products.image} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                {products.name}
                                <div class="badge badge-secondary">NEW</div>
                            </h2>
                            <h1>{products.description}</h1>
                            <div class="card-actions justify-center">
                            
                                <div class="badge badge-outline">Fashion</div>
                                <div class="badge badge-outline">Stock:{products.quantity}</div>
                                <div class="badge badge-outline">${products.price}</div>
                            </div>
                            <div className='flex'>

                    <button onClick={() => handleDelete(products._id)} className='bg-red-500 p-2 w-4/5 text-white font-bold rounded-xl'>Delete  </button> 
                    <td className='w-4/5'> <Link to={'/update'}><button  className='bg-green-600 p-2 w-5/6 text-white font-bold rounded-xl'>Update</button></Link> </td>
                    </div>
                        </div>
                    </div>
                    
                </div>)
            }
        </div>
    );
};

export default Myitems;
import React, { useState } from 'react';

const Addiems = () => {
    

    const handleUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const quantity = event.target.quantity.value;
        const image = event.target.image.value;
        const user  = {name, price, description, quantity, image};

    

    fetch('http://localhost:5000/products',{
        method:"POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(user)

    })
    .then(res => res.json())
    .then(data =>{
        alert("Your Product added");
        console.log(data);
    });
}
    return (
        <div className='w-1/3 justify-center ml-10 lg:ml-96 mt-10 '>
            <h1 className='text-3xl font-semibold ml-10'>Add Your <span className='text-yellow-400 mb-10'>Product</span></h1>
            <form className='mt-10' onSubmit={handleUser}>
                <input className='border-2 w-full p-2 input input-bordered input-md w-full max-w-xs' type="test" name='name' placeholder='tshirt name' required></input>
                <br></br>
                <br></br>
                <input className='border-2 w-full p-2 input input-bordered input-md w-full max-w-xs' type="text" name='price' placeholder='price' required></input>
                <br></br>
                <br></br>
                <input className='border-2 w-full p-2 input input-bordered input-md w-full max-w-xs' type="text" name='quantity' placeholder='quantity' required></input>
                <br></br>
                <br></br>
                <input className='border-2 w-full p-4 input input-bordered input-md w-full max-w-xs' type="text" name='description' placeholder='description' required></input>
                <br></br>
                <br></br>
                <input className='border-2 w-full p-2 input input-bordered input-md w-full max-w-xs' type="text" name='image' placeholder='image url' required></input>
                <br></br>
                <br></br>
                <input className='border-2 font-bold p-3 rounded-xl w-full max-w-xs hover:bg-blue-400 hover:text-white' type='submit' value='Add items'></input>
            </form>
        </div>
    );
};

export default Addiems;
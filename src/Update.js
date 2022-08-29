import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [user, setUsers] = useState([]);
    useEffect(() => {
        const url = `https://hore-07149.herokuapp.com/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [id]);

    const handleUpdateitems = event => {

        event.preventDefault();


        const price = event.target.price.value;

        const inStock = event.target.stock.value;

        const user = { price, inStock };
        //console.log(user);


        fetch(`https://localhost:5000/products/${id}`, {
            method: 'PUT', // or 'POST'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                /*const newBook = [user, data];
                setUsers(newBook); */
                //console.log("Sucess", data);
                alert("Update Successfully", data);
                event.target.reset();

            })


    }
    return (
        <div>
            <div className="flex p-5 ml-44 mt-10 flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={user.img} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.description}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {user.price}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.inStock}</p>

                    <form onSubmit={handleUpdateitems}>
                        <div className='flex gap-2 p-2'>
                            <input className='border-2' type="text" name='price' placeholder='price' />
                            <br></br>
                            <input className='border-2' type="text" name='stock' placeholder='stock' />
                        </div>

                        <br></br>
                        <button className='bg-green-600 p-2 w-2/3 text-white font-bold rounded-xl'>update</button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {  createUserWithEmailAndPassword, getAuth} from "firebase/auth";

import useFirebase from '../useFirebase';
import app from '.././firebase.init';

const auth = getAuth(app)
const Signup = () => {
    const[name, setName] = useState([]);
    const[email,setEmail] = useState([]);
    const[password,setPassword] = useState([]);
    const {signInWithGoogle} = useFirebase();
  

    const handleName = event =>{
        setName(event.target.value);
    }
    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value);
    }
    const handleUser = event =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then( result =>{
            const user = result.user;
        })
        .catch( error =>{
            console.error(error);
        })
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleUser}>
            <div class="hero min-h-screen px-10 lg:px-32">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left w-2/3 lg:w-2/3">
                        <img src='https://ae01.alicdn.com/kf/HTB1XjtUarr1gK0jSZFDq6z9yVXaO.jpg?width=960&height=960&hash=1920'></img>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input onBlur={handleName} type="text" placeholder="name" class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input onBlur={handleEmail} type="email" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input onBlur={handlePassword} type="password" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                  Have an Account?  <Link to={'/login'}><a href="#" class="label-text-alt link link-hover text-lg text-red-600">Please Login</a></Link>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-secondary">Sing-up</button>
                                 <span className='text-center'>OR</span>
                                <button onClick={signInWithGoogle} class="btn ">GOOGLE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
};

export default Signup;
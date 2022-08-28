import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const auth = getAuth(app)
const Login = () => {
    const [email, setEmail] = useState([]);
    const [pass, setPass] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || '/';

    const handleEmail = event => {
        setEmail(event.target.value);
        if(handleEmail === false){
            return;
        }
    }
    const handlePass = event => {
        setPass(event.target.value);
        if(handlePass === false){
            return;
        }
    }
    
    const handleLogin = event => {
        signInWithEmailAndPassword(auth, email, pass)
        .then(result =>{
            const user = result.user;
            alert("Successfully Logged in");
        })
        .catch(error =>{
            alert("Invalid Password");
        })
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
            <div class="hero min-h-screen px-10 lg:px-32">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left w-2/3 lg:w-2/3">
                        <img src='https://ae01.alicdn.com/kf/HTB1XjtUarr1gK0jSZFDq6z9yVXaO.jpg?width=960&height=960&hash=1920'></img>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
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
                                <input onBlur={handlePass} type="password" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                Don't have an Account?    <Link to={'/signup'}><a href="#" class="label-text-alt link link-hover text-lg text-red-600">Create an Account</a></Link>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-secondary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
};

export default Login;
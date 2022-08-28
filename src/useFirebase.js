import {  useEffect, useState } from "react"
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";



  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    useEffect( () =>{
        onAuthStateChanged(auth, user =>{
            setUser(user);
        })
    },[])

    const handleSignOut = () =>{
        signOut(auth)
        .then(() => {})
    }

    const signInWithGoogle= () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
    }

    //return [newUser, setNewUser];

    return {user, handleSignOut, signInWithGoogle}
}
export default useFirebase;
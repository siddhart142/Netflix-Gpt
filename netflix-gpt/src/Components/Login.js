import React, { useState, useRef } from 'react'
import Header from './Header'
import {checkValidData} from "../Utils/Validate"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { updateProfile } from "firebase/auth";
const Login = () => {
  const [isSignIn,setSignIn] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignIn = ()=>{
      setSignIn(!isSignIn)
  }
  const handleButtonClick = () => {
    // validate the form data
    //  to get this email and password, we can use state variable(as done in prev project) or reference to the input box using useRef (done in this project)
    const message=checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)

    if(message) return;

    //SignUp and SignIn Logic
    if(!isSignIn){
      // SignUp Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        }).then(() => {
          // Profile updated!
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid:uid, email : email, displayName :displayName ,photoURL : photoURL}));
          navigate("/browse")
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error+" "+errorMessage)
        });
        console.log(user)
       

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(error+" "+errorMessage)
      });
    }
    else{
      // SignIn Logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        navigate("/browse")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(error+" "+errorMessage)
      });
    }

    // if valid procced further
  }
  return (
    <div>

      <Header />

      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix" />
      </div>

      {/* basically what happens is whn we create a button and click it, by default onSubmit event is called, and since we dont have onSubmit in form it was refreshing the page, i.e., why we need to prevent it from performing any action, so e.preventdefault where e is event */}
      <form onSubmit={(e) => e.preventDefault()} className=' text-white absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-md'>
        <h1 className=' mx-10 px-4 font-bold text-3xl py-6 '>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (<input className="mx-14 my-2 w-8/12 rounded-sm px-4 bg-slate-500 p-1" ref={name} type="text" placeholder='FullName' />)}
        <input className="mx-14 my-2 w-8/12 rounded-sm px-4 bg-slate-500 p-1" ref={email} type="text" placeholder='Email Address' />
        <input className="mx-14 my-2 w-8/12 rounded-sm px-4 bg-slate-500 p-1" ref={password} type="password" placeholder='Password' />
        <p className='text-red-600 font-bold font-sans py-2 my-2 mx-14 px-4'>{errorMessage}</p>
        <button className="my-2 mx-14 p-1 w-8/12 rounded-sm bg-red-700 px-4" onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p onClick={handleSignIn} className='cursor-pointer py-8 my-2 mx-14 px-4'>{isSignIn ? "New to Netflix? Sign Up Now" : "Already a member?Sign In Now"}</p>
      </form>
      
    </div>
  )
}

export default Login

import React ,{useEffect} from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "../Utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice'
import { toggleGptView } from '../Utils/gptSlice';

const Header = () => {

  const user=useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleGpt = () => {
    dispatch(toggleGptView());
  }
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });    
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid:uid, email : email, displayName :displayName ,photoURL : photoURL}));
          navigate("/browse");
        } else {
          // User is signed out
          // console.log("user Signed out")
          dispatch(removeUser())
          navigate("/");
          
        }
      });
      return () => unsubscribe();
},[])
  return (

      <div className='w-screen absolute px-20 py-4 bg-gradient-to-b from-black z-10 flex justify-between' >
        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        {user && (<div className='flex'>
          <button onClick={handleGpt} className='text-white bg-red-600 rounded-md px-4 m-4 bg-opacity-50'>GPT Search</button>
          <img className="w-10 rounded-2xl m-4 " src={user? user.photoURL : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1031"}/>
          <button onClick={handleSignOut} className=' m-4 rounded-md px-2 font-bold text-zinc-50 bg-orange-600 bg-opacity-40'>Sign Out</button>
        </div>)}
      </div>
      
    
  )
}

export default Header

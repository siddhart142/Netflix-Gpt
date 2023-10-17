import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../Utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const user=useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }
  return (

      <div className='w-screen absolute px-20 py-4 bg-gradient-to-b from-black z-10 flex justify-between' >
        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        {user && (<div className='flex'>
          <img className="w-10 rounded-2xl m-4 " src={user? user.photoURL : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1031"}/>
          <button onClick={handleSignOut} className=' m-4 rounded-md px-2 font-bold text-zinc-50 bg-orange-600'>Sign Out</button>
        </div>)}
      </div>
      
    
  )
}

export default Header

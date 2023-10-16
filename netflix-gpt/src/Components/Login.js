import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn,setSignIn] = useState(true);
  const handleSignIn = ()=>{
      setSignIn(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix" />
        {/* <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="netflix" /> */}
      </div>
      <form className=' text-white absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-md'>
        <h1 className='px-4 font-bold text-3xl py-6 '>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input className="mx-14 my-2 w-8/12 rounded-sm px-4 bg-slate-500 p-1" type="text" placeholder='FullName' />}
        <input className="mx-14 my-2 w-8/12 rounded-sm px-4 bg-slate-500 p-1" type="text" placeholder='Email Address' />
        <input className="mx-14 my-2 w-8/12 rounded-sm px-4 bg-slate-500 p-1" type="password" placeholder='Password' />
        <button className="my-2 mx-14 p-1 w-8/12 rounded-sm bg-red-700 px-4">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p onClick={handleSignIn} className='cursor-pointer py-8 my-2 mx-14 px-4'>{isSignIn ? "New to Netflix? Sign Up Now" : "Already a member?Sign In Now"}</p>
      </form>
      
    </div>
  )
}

export default Login

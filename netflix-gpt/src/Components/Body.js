import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, useNavigate} from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "../Utils/firebase"
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice'
import store from "../Utils/appStore"
const Body = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element: <Login />
        },
        {
            path : "/browse",
            element : user? <Browse /> : <Login /> 
        },
    ]);


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const { uid, email, displayName, photoURL } = user;
              dispatch(addUser({ uid:uid, email : email, displayName :displayName ,photoURL : photoURL}));
              
            } else {
              // User is signed out
              dispatch(removeUser())
              
            }
          });
    },[])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body

import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import { useState } from 'react'
import "./SignInSignUp.css"
const SignInSignUp = () => {
  const [refresh,setrefresh]=useState(false);
  return localStorage.getItem("token") ?  
  <button onClick={()=>{
    localStorage.clear("token");
    setrefresh(!refresh)
    
  }}>log out</button>
  :(
    <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
    </div>
  )
}

export default SignInSignUp

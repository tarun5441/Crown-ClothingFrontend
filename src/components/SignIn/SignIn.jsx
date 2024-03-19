import React from 'react'
import { useState } from "react"
import FormInput from '../../components/form-input/formInput'
import CustomButton from '../../components/custom-button/customButton'
import "./SignIn.css"
import axios from 'axios'
import { useNavigate } from 'react-router'
// import SignOut from '../SignOut/SignOut'
const defaultFormFields = {
    email: "",
    password: "",
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    
    const navigate=useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response=await axios.post('http://localhost:8000/user/login',{
                email:email,
                password:password
            });
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            alert("User Logged In Successfully");
            navigate('/')
            setFormFields(defaultFormFields);
        }catch(error){
            console.log(error);
            alert("email or Password is wrong");
        }
      }
    //   const handleLogout = () => {
    //     setFormFields(defaultFormFields);
    //     alert("Logged out successfully");
    // };  

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
      }
  return (
    <div className='sign-in'>
                <h3>I already have an account</h3>
                <span>Sign in with your email and password</span>

                <form className='sign-in-form' onSubmit={(event)=>handleSubmit(event)}>
                    <FormInput
                        type='text'
                        name='email'
                        value={email} 
                        label='email'
                        handleChange={handleChange}
                        required />
                    <FormInput
                        type='password'
                        name='password'
                        label='Password'
                        value={password} 
                        handleChange={handleChange}
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                    </div>

                </form>
            </div>
  )
}

export default SignIn

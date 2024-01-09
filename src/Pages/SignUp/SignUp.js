import React from 'react'
import '../../App.css'
import logo from '../../Img/Logo.png'
import { Link } from 'react-router-dom'
export default function SignUp(){
    return(
        <div className='Page'>
            <div className='Leftside'>
                <img src={logo} className='Img'></img>
            </div>
            <div className='Rightside'>
                  <h1>Welcome To Tasker</h1>
                  <h2 className='register'>Sign Up</h2>
                  <label className='FieldName'>Name</label>
                  <input className='input-field' id='email' placeholder='your Name'></input>
                  <label className='FieldName'>Email</label>
                  <input className='input-field' id='email' placeholder='your email'></input>
                  <label className='FieldName'>Password</label>
                  <input className='input-field' type='password' placeholder='your password'></input>
                  <label className='FieldName'>Confirm Password</label>
                  <input className='input-field' type='password' placeholder='Retype password'></input>
                  <div className='KeepSigned'>
                        <input type='checkbox' className='checkbox'></input><h2>I agree to the terms and conditions.</h2>
                  </div>
                  <button type='submit' className='SignIn'>Sign Up</button>
                  <h2>Do you already have an account? <Link to="/">Sign In</Link></h2>
            </div>
        </div>
    )
}
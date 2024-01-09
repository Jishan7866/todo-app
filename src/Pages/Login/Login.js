import React from 'react'
import '../../App.css'
import logo from '../../Img/Logo.png'
import { Link } from 'react-router-dom'
export default function Login(){
    return(
        <div className='Page'>
            <div className='Leftside'>
                <img src={logo} className='Img'></img>
            </div>
            <div className='Rightside'>
                  <h1>Welcome To Tasker</h1>
                  <h2>Please, insert your informations to access your tasks</h2>
                  <label className='FieldName'>Email</label>
                  <input className='input-field' id='email' placeholder='your email'></input>
                  <label className='FieldName'>Password</label>
                  <input className='input-field' type='password' placeholder='your password'></input>
                  <div className='KeepSigned'>
                        <input type='checkbox' className='checkbox'></input><h2>Remeber me</h2>
                  </div>
                  <button type='submit' className='SignIn'>Sign In</button>
                  <h2>Don't have an account? <Link to="/register">Sign Up</Link></h2>
            </div>
        </div>
    )
}
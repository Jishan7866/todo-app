import { useState } from 'react'
import React from 'react'
import '../../App.css'
import logo from '../../Img/Logo.png'
import { Link,useNavigate  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
export default function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handlelogin=()=>{
        const staticEmail = 'waysdevops@gmail.com';
        const staticPassword = 'password123';
        if (email===staticEmail&&password===staticPassword){
            navigate('/home')
        }else{
            alert('Invalid Details');
        }
    }
    return(
        <div className='Page'>
            <div className='Leftside'>
                <img src={logo} className='Img' alt="logo"></img>
            </div>
            <div className='Rightside'>
                  <h1>Welcome To Tasker</h1>
                  <h2>Please, insert your informations to access your tasks</h2>
                  <label className='FieldName'>Email</label>
                  <input className='input-field' id='email' placeholder='your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                  <label className='FieldName'>Password</label>
                  <input className='input-field' type='password' placeholder='your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                  <div className='KeepSigned'>
                        <input type='checkbox' className='checkbox'></input><h2>Remeber me</h2>
                  </div>
                  <button type='submit' className='SignIn' onClick={handlelogin}>Sign In</button>
                  <h2>Don't have an account? <Link to="/register">Sign Up</Link></h2>
            </div>
        </div>
    )
}
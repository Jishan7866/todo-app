import React from 'react';
import nav_logo from '../../Img/navlogo.png'
import avatar_logo from '../../Img/avatar.jpg'
import '../../Style/Navbar.css';
export default function Navbar(){

    return(
        <div className='navbar'>
        <div className="logo-container">
            <img src={nav_logo} alt="logo" className="logo"></img>
            <span className="dev-todo">Dev todo</span>
        </div>
        <img src={avatar_logo} alt='avatar' className='avatar'></img>
    </div>
    )
}
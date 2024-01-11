import React, {useState} from 'react';
import avatar from '../../Img/avatar.jpg';
export default function Header(){
    const [isDropdownOpen,setDropdownOpen]=useState(false);
    const toggleDropdown = () =>{
        setDropdownOpen(!isDropdownOpen);
    }
    return(
        <header className='header-container'>
            <div className='avatar-container' onClick={toggleDropdown}>
                <img className='avatar-image' src={avatar} alt='avatar'></img>
                {isDropdownOpen &&(
                    <div className=''>
                        <ul>
                            <li>My Profile</li>
                            <li>My Prof</li>
                            <li>My Profile</li>
                        </ul>
                    </div>
                )}
            </div>
            <h1 className='header-title'>Welcome to Admin In Todo-App</h1>
        </header>
    )
}
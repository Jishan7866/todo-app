import react from 'react';
import avatar from '../../Img/avatar.jpg';
export default function Header(){
    return(
        <header className='header-container'>
            <div className='avatar-container'>
                <img className='avatar-image' src={avatar}></img>
            </div>
            <h1 className='header-title'>Welcome to Admin In Todo-App</h1>
        </header>
    )
}
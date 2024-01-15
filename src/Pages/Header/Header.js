import React, {useState} from 'react';
// import avatar from '../../Img/avatar.jpg';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Button } from 'react-bootstrap';
import logo from '../../Img/devlogo.png';
export default function Header(){
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    function scrollHandler(){
        if(window.scrollY >=20){
            updateNavbar(true);
        }else{
            updateNavbar(false);
        }
    }
    window.addEventListener("scroll",scrollHandler)
    return(
       <Navbar expanded={expand} fixed='top' expand="mod" className={navColour ? "sticky":"navbar"}>
        <Container>
            <Navbar.Brand href='/' className='d-flex'>
                <img src={logo} className='img-fluid logo'alt='home'></img>
            </Navbar.Brand>
        </Container>
       </Navbar>
    )
}
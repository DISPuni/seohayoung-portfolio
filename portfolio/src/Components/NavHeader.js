import React from 'react'
import { useNavigate } from 'react-router-dom'

import './NavHeader.css'

import logo from '../assets/icons/disp_mainlogo.svg'

function NavHeader(props) {

    let navigate = useNavigate();
    function toHome() {
        navigate('/home')
    }
    function toAbout() {
        navigate('/about')
    }
    function toBlog() {
        navigate('/blog')
    }

    return (
        <div id='navHeader' className='desktop'>
            <img id='headerLogo' src={logo} alt="main logo" onClick={() => toHome()}/>
            <span id='nav' style={{ display: props.isNav ? 'flex':'none'}}>
                <span id='navAbout' style={{ color: props.isAbout ? '#7E7E86':'#161619' }} onClick={() => toAbout()}>ABOUT</span>
                <span id='navBlog' style={{ color: props.isBlog ? '#7E7E86':'#161619' }} onClick={() => toBlog()}>BLOG</span>
            </span>
        </div>
    )
}

export default NavHeader
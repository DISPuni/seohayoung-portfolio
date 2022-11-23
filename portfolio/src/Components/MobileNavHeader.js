import React from 'react'
import { useNavigate } from 'react-router-dom'

import './MobileNav.css'

import logo from '../assets/icons/disp_mainlogo.svg'
import hamburger from '../assets/mobile/mobilever_menu.svg'

function MobileNavHeader(props) {

    let navigate = useNavigate();
    function toHome() {
        navigate('/home')
    }

    function showModal() {
        props.setIsModalOpen(true);
    }

    return (
        <div id='mobileNavHeader' className='flex'>
            <img id='mobileNavHomeLogo' src={logo} alt="" onClick={toHome}/>
            <img id='mobileNavHamburger' src={hamburger} alt="" onClick={showModal}/>
        </div>
    )
}

export default MobileNavHeader
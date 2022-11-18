import React from 'react'

import './MobileNav.css'

import logo from '../assets/icons/disp_mainlogo.svg'
import hamburger from '../assets/mobile/mobilever_menu.svg'

function MobileNavHeader(props) {

    function showModal() {
        props.setIsModalOpen(true);
    }

    return (
        <div id='mobileNavHeader' className='flex'>
            <img id='mobileNavHomeLogo' src={logo} alt="" />
            <img id='mobileNavHamburger' src={hamburger} alt="" onTouchStart={showModal}/>
        </div>
    )
}

export default MobileNavHeader
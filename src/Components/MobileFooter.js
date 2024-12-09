import React from 'react'

import './MobileFooter.css'

import disp from '../assets/icons/disp_mainlogo.svg'

function MobileFooter() {
    return (
        <div id='mobileFooter' className='flex-col'>
            <img id='mobileFooterIcon' src={disp} alt="" />
            <div id='mobileFooterText'>
                It’s not special, but there’s anything without it. CopyrightⓒDISP All rights reserved.
            </div>
        </div>
    )
}

export default MobileFooter
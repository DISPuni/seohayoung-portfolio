import React from 'react'

import './MobileNav.css'

import closeBtn from '../assets/mobile/mobilever_x.svg'
import visual from '../assets/icons/visual_icon.svg'
import fashion from '../assets/icons/fashion_icon.svg'
import media from '../assets/icons/media_icon.svg'


function MobileNav(props) {

    function closeModal() {
        props.setIsModalOpen(false);
    }

    return (
        <div id='mobileNav' className='flex-col'>
            <img id='mobileNavCloseBtn' src={closeBtn} alt="" onTouchStart={closeModal}/>
            <div id='iconTextSet1' className='iconTextSet flex-col'>
                <img id='mobileNavVisual' className='mobileNavIcon' src={visual} alt="" />
                <div className='mobileNavText'>Visual</div>
            </div>
            <div className='iconTextSet flex-col'>
                <img id='mobileNavFashion' className='mobileNavIcon' src={fashion} alt="" />
                <div className='mobileNavText'>Fashion</div>
            </div>
            <div className='iconTextSet flex-col'>
                <img id='mobileNavMedia' className='mobileNavIcon' src={media} alt="" />
                <div className='mobileNavText'>Media</div>
            </div>
            <div id='mobileNavDivider'/>
            <div id='mobileNavBottomText' className='flex-col' >
                <div id='mobileNavText2About' className='mobileNavText2'>ABOUT</div>
                <div className='mobileNavText2'>BROG</div>
            </div>
        </div>
    )
}

export default MobileNav
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './MobileNav.css'

import closeBtn from '../assets/mobile/mobilever_x.svg'
import visual from '../assets/icons/visual_icon.svg'
import fashion from '../assets/icons/fashion_icon.svg'
import media from '../assets/icons/media_icon.svg'


function MobileNav(props) {

    let navigate = useNavigate();
    function toVisual() {
        navigate('/visual')
    }
    function toFashion() {
        navigate('/fashion')
    }
    function toMedia() {
        navigate('/media')
    }
    function toAbout() {
        navigate('/about')
    }
    function toBlog() {
        navigate('/blog')
    }

    function closeModal() {
        props.setIsModalOpen(false);
    }

    return (
        <div id='mobileNav' className='flex-col'>
            <img id='mobileNavCloseBtn' src={closeBtn} alt="" onClick={closeModal}/>
            <div id='iconTextSet1' className='iconTextSet flex-col'>
                <img id='mobileNavVisual' className='mobileNavIcon' src={visual} alt="" onClick={toVisual}/>
                <div className='mobileNavText' onClick={toVisual}>Visual</div>
            </div>
            <div className='iconTextSet flex-col'>
                <img id='mobileNavFashion' className='mobileNavIcon' src={fashion} alt="" onClick={toFashion}/>
                <div className='mobileNavText' onClick={toFashion}>Fashion</div>
            </div>
            <div className='iconTextSet flex-col'>
                <img id='mobileNavMedia' className='mobileNavIcon' src={media} alt="" onClick={toMedia}/>
                <div className='mobileNavText' onClick={toMedia}>Media</div>
            </div>
            <hr id='mobileNavDivider' noshade/>
            <div id='mobileNavBottomText' className='flex-col' >
                <div id='mobileNavText2About' className='mobileNavText2' onClick={toAbout}>ABOUT</div>
                <div className='mobileNavText2' onClick={toBlog}>BROG</div>
            </div>
        </div>
    )
}

export default MobileNav
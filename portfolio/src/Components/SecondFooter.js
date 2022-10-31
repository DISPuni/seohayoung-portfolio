import React from 'react'
import { useNavigate } from 'react-router-dom'

import './SecondFooter.css'

import footerFashion from '../assets/footerIcon/servefooter_fahion.svg'
import inactivatedFashion from '../assets/footerIcon/servefooter_fahion_inactivation.svg'
import footerMedia from '../assets/footerIcon/servefooter_media.svg'
import inactivatedMedia from '../assets/footerIcon/servefooter_media_inactivation.svg'
import footerVisual from '../assets/footerIcon/servefooter_visual.svg'
import inactivatedVisual from '../assets/footerIcon/servefooter_visual_inactivation.svg'

function SecondFooter(props) {

    let navigate = useNavigate();
    function toFashion() {
        navigate('/fashion')
    }
    function toVisual() {
        navigate('/visual')
    }
    function toMedia() {
        navigate('/media')
    }

    return (
        <div id='secondFooter' className='flex-col'>
            <div id='firstSection' className='flex'>
                <div className='footer-component' style={{ marginLeft: 'auto', marginRight: '7rem' }} onClick={() => toFashion()}>
                    <img src={ props.fashion ? inactivatedFashion:footerFashion } alt="fashion icon" className="footer-icon" />
                    <div className="second-footer-text">Fashion</div>
                </div>
                <div className='footer-component' style={{ marginLeft: '7rem', marginRight: '7rem' }} onClick={() => toVisual()}>
                    <img src={ props.visual ? inactivatedVisual:footerVisual} alt="visual icon" className="footer-icon" />
                    <div className="second-footer-text">Visual</div>
                </div>
                <div className='footer-component' style={{ marginLeft: '7rem', marginRight: 'auto' }} onClick={() => toMedia()}>
                    <img src={ props.media ? inactivatedMedia:footerMedia} alt="media icon" className="footer-icon" />
                    <div className="second-footer-text">Media</div>
                </div>
            </div>
            <div id='secondSection'>
                <div id='secondSectionText'>It’s not special, but there’s anything without it.</div>
            </div>
        </div>
    )
}

export default SecondFooter
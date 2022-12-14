import React, { useRef } from 'react'

import '../ServePost.css'

import todaywho0 from '../../../assets/media/uiux_todaywho/todaywho_000.mp4'
import todaywho1 from '../../../assets/media/uiux_todaywho/todaywho_001.png'
import todaywho2 from '../../../assets/media/uiux_todaywho/todaywho_002.png'

function MediaPost5() {

    const videoRef = useRef(null);

    function videoPause() {
        if (videoRef.current.paused) {
            console.log('puaused');
            videoRef.current.play();
        } else {
            console.log('played');
            videoRef.current.pause();
        }
    }

    return (
        <div className='serve-content-body'>
            <video className='content-video' controls autoPlay ref={videoRef} onClick={() => videoPause()}>
                <source src={todaywho0} type="video/mp4" />
            </video>
            <img className='content-img' src={todaywho1} alt="" />
            <img className='content-img' src={todaywho2} alt="" />
        </div>
    )
}

export default MediaPost5
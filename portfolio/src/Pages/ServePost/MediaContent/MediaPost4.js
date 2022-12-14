import React, { useRef } from 'react'

import '../ServePost.css'

import famsupport0 from '../../../assets/media/uiux_famsupport/famsupport_000.mp4'
import famsupport1 from '../../../assets/media/uiux_famsupport/famsupport_001.png'
import famsupport2 from '../../../assets/media/uiux_famsupport/famsupport_002.png'
import famsupport3 from '../../../assets/media/uiux_famsupport/famsupport_003.png'

function MediaPost4() {

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
                <source src={famsupport0} type="video/mp4" />
            </video>
            <img className='content-img' src={famsupport1} alt="" />
            <img className='content-img' src={famsupport2} alt="" />
            <img className='content-img' src={famsupport3} alt="" />
        </div>
    )
}

export default MediaPost4
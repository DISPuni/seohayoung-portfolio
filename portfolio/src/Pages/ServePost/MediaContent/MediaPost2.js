import React, { useRef } from 'react'

import '../ServePost.css'

import shimshim0 from '../../../assets/media/interaction_shimshim/shimshim_000.mp4'
import shimshim1 from '../../../assets/media/interaction_shimshim/shimshim_001.png'

function MediaPost2() {

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
                <source src={shimshim0} type="video/mp4" />
            </video>
            <img className='content-img' src={shimshim1} alt="" />
        </div>
    )
}

export default MediaPost2
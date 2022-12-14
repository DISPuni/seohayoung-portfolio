import React, { useRef } from 'react'

import '../ServePost.css'

import souvenir0 from '../../../assets/media/motion_souvenir/souvenir_000.mp4'
import souvenir1 from '../../../assets/media/motion_souvenir/souvenir_001.png'
import souvenir2 from '../../../assets/media/motion_souvenir/souvenir_002.png'

function MediaPost3() {

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
                <source src={souvenir0} type="video/mp4" />
            </video>
            <img className='content-img' src={souvenir1} alt="" />
            <img className='content-img' src={souvenir2} alt="" />
        </div>
    )
}

export default MediaPost3
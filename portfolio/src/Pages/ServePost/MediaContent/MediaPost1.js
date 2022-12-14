import React, { useRef } from 'react'

import '../ServePost.css'

import pop0 from '../../../assets/media/animation_pop/pop_000.mp4'
import pop1 from '../../../assets/media/animation_pop/pop_001.png'
import pop2 from '../../../assets/media/animation_pop/pop_002.png'

function MediaPost1() {

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
                <source src={pop0} type="video/mp4" />
            </video>
            <img className='content-img' src={pop1} alt="" />
            <img className='content-img' src={pop2} alt="" />
        </div>
    )
}

export default MediaPost1
import React from 'react'

import '../ServePost.css'

import souvenir1 from '../../../assets/media/motion_souvenir/souvenir_001.png'
import souvenir2 from '../../../assets/media/motion_souvenir/souvenir_002.png'

function MediaPost3() {

    return (
        <div className='serve-content-body'>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/u1gb4znNeRE`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <img className='content-img' src={souvenir1} alt="" />
            <img className='content-img' src={souvenir2} alt="" />
        </div>
    )
}

export default MediaPost3
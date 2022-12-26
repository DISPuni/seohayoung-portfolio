import React from 'react'

import '../ServePost.css'

import shimshim1 from '../../../assets/media/interaction_shimshim/shimshim_001.png'

function MediaPost2() {

    return (
        <div className='serve-content-body'>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/HTiNnOj-rPk`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <img className='content-img' src={shimshim1} alt="" />
        </div>
    )
}

export default MediaPost2
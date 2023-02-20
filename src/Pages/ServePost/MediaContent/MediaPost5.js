import React from 'react'

import '../ServePost.css'

import todaywho1 from '../../../assets/media/uiux_todaywho/todaywho_001.png'
import todaywho2 from '../../../assets/media/uiux_todaywho/todaywho_002.png'

function MediaPost5() {

    return (
        <div className='serve-content-body'>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/_gfihwT4RTs`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <img className='content-img' src={todaywho1} alt="" />
            <img className='content-img' src={todaywho2} alt="" />
        </div>
    )
}

export default MediaPost5

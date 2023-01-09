import React from 'react'

import '../ServePost.css'

import geumyeonmode1 from '../../../assets/media/uiux_geumyeonmode/geumyeonmode_001.png'
import geumyeonmode2 from '../../../assets/media/uiux_geumyeonmode/geumyeonmode_002.png'

function MediaPost6() {

    return (
        <div className='serve-content-body'>
            
            <img className='content-img' src={geumyeonmode1} alt="" />
            <img className='content-img' src={geumyeonmode2} alt="" />
        </div>
    )
}

export default MediaPost6
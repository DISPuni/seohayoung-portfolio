import React from 'react'
import '../ServePost.css'

import geumyeonmode0 from '../../../assets/media/uiux_geumyeonmode/geumyeonmode_000.png'
import geumyeonmode1 from '../../../assets/media/uiux_geumyeonmode/geumyeonmode_001.png'
import geumyeonmode1_1 from '../../../assets/media/uiux_geumyeonmode/geumyeonmode_001_1.png'
import geumyeonmode2 from '../../../assets/media/uiux_geumyeonmode/geumyeonmode_002.png'
import ChevronRightArrow from '../../../assets/ChevronArrow.svg'

function MediaPost6() {

    return (
        <div className='serve-content-body'>
            <img className='content-img' src={geumyeonmode0} alt="" />
            <img className='content-img' src={geumyeonmode1} alt="" />
            <img className='content-img' src={geumyeonmode1_1} alt="" />
            <img className='content-img' src={geumyeonmode2} alt="" />
            <br></br>
            <br></br>
            <img className='arrow' src={ChevronRightArrow} alt="" /><br></br>
            <a href='https://chang-blog.oopy.io/22acccc8-378d-47e7-852e-20d408b6d3c7' target={'_blank'}>부트캠프 창 2기 기획서 보러가기 </a>
        </div>
    )
}

export default MediaPost6
import React from 'react'

import '../ServePost.css'

import counselor1 from '../../../assets/media/motion_counselor/counselor_001.png'
import counselor2 from '../../../assets/media/motion_counselor/counselor_002.png'
import counselor3 from '../../../assets/media/motion_counselor/counselor_003.png'
import counselor3_1 from '../../../assets/media/motion_counselor/counselor_003.jpg'
import counselor4 from '../../../assets/media/motion_counselor/counselor_004.png'
import counselor4_1 from '../../../assets/media/motion_counselor/counselor_004.gif'
import counselor4_2 from '../../../assets/media/motion_counselor/counselor_004_2.png'
import counselor5 from '../../../assets/media/motion_counselor/counselor_005.png'
import counselor5_1 from '../../../assets/media/motion_counselor/counselor_005.jpg'

function MediaPost8() {

    return (
        <div className='serve-content-body'>
            <img className='content-img' src={counselor1} alt="" />
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/PCqZH9fH8G8`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/Xp5FDErYb3I`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/9KeH2nVxCWs`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img className='content-img' src={counselor2} alt="" />
            <img className='content-img' src={counselor3} alt="" />
            <img className='content-img' src={counselor3_1} alt="" />
            <img className='content-img' src={counselor4} alt="" />
            <img className='content-img' src={counselor4_1} alt="" />
            <img className='content-img' src={counselor4_2} alt="" />
            <img className='content-img' src={counselor5} alt="" />
            <img className='content-img' src={counselor5_1} alt="" />
        </div>
    )
}

export default MediaPost8
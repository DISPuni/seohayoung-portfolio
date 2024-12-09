import React from 'react'

import '../ServePost.css'

import ChevronRightArrow from '../../../assets/ChevronArrow.svg'
import oneul0 from '../../../assets/media/uiux_oneul/oneul_000.png'
import oneul1 from '../../../assets/media/uiux_oneul/oneul_001.png'
import oneul2 from '../../../assets/media/uiux_oneul/oneul_002.png'
import oneul3 from '../../../assets/media/uiux_oneul/oneul_003.png'
import oneul4 from '../../../assets/media/uiux_oneul/oneul_004.png'
import oneul5 from '../../../assets/media/uiux_oneul/oneul_005.png'


function MediaPost9() {

    return (
        <div className='serve-content-body'>
            
            <img className='content-img' src={oneul0} alt="" />
            <img className='content-img' src={oneul1} alt="" />
            <img className='content-img' src={oneul2} alt="" />
            <img className='content-img' src={oneul3} alt="" />
            <img className='content-img' src={oneul4} alt="" />
            <img className='content-img' src={oneul5} alt="" />
            <br></br>
            <br></br>
            <img className='arrow' src={ChevronRightArrow} alt="" /><br></br>
            <a href='https://finaloneul.netlify.app/?fbclid=PAAaZoApede5Z40A7zT3_lJWwuv_yPQV25Yh-GkXtbgGHbutDD3f81e3LaCq0' target={'_blank'}>오늘 앱 보러가기 </a>
        </div>
    )
}

export default MediaPost9
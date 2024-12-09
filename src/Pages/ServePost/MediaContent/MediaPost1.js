import React from 'react'

import '../ServePost.css'

import pop1 from '../../../assets/media/animation_pop/pop_001.png'
import pop2 from '../../../assets/media/animation_pop/pop_002.png'
import ChevronRightArrow from '../../../assets/ChevronArrow.svg'

function MediaPost1() {

    return (
        <div className='serve-content-body'>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/-lkTPa8tlJ4`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <img className='content-img' src={pop1} alt="" />
            <img className='content-img' src={pop2} alt="" />
            <br></br>
            <br></br>
            <img className='arrow' src={ChevronRightArrow} alt="" /><br></br>
            <a href='https://programs.sbs.co.kr/culture/anigallery/board/52667?cmd=view&page=1&board_no=10194' target={'_blank'}>SBS 애니갤러리 696화 pop! 편성표 보러가기 </a>
        </div>
    )
}

export default MediaPost1


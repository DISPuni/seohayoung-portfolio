import React from 'react'

import '../ServePost.css'

import ChevronRightArrow from '../../../assets/ChevronArrow.svg'
import pyeon0 from '../../../assets/visual/graphic_pyeonteilbar/Pyeonteilbar_000.png'
import pyeon1 from '../../../assets/visual/graphic_pyeonteilbar/Pyeonteilbar_001.png'
import pyeon2 from '../../../assets/visual/graphic_pyeonteilbar/Pyeonteilbar_002.png'
import pyeon3 from '../../../assets/visual/graphic_pyeonteilbar/Pyeonteilbar_003.png'

function VisualPost4() {
    return (
        <div className='serve-content-body'>
            <img className='content-img' src={pyeon0} alt="" />
            <img className='content-img' src={pyeon1} alt="" />
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/4FKjQM2tUGY`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <img className='content-img' src={pyeon2} alt="" />
            <img className='content-img' src={pyeon3} alt="" />
            <br></br>
            <br></br>
            <img className='arrow' src={ChevronRightArrow} alt="" /><br></br>
            <a href='https://tumblbug.com/oobb_artbook_project/story?_branch_match_id=1091562509533130933' target={'_blank'}>펀딩 보러가기 </a>
            <br></br>
            구매처<img className='arrow' src={ChevronRightArrow} alt="" /><br></br>
            <a href='https://smartstore.naver.com/now_afterbooks/products/8091921016' target={'_blank'}>이후북스</a><br></br>
            <a href='https://byeolcheck.kr/product/e05ea0e2-3ba6-4685-a797-01182d52aa2e' target={'_blank'}>별책부록</a>
        </div>
        
    )
}

export default VisualPost4
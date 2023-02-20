import React from 'react'

import '../ServePost.css'

import www0 from '../../../assets/visual/bx_www/www_000.png'
import www1 from '../../../assets/visual/bx_www/www_001.png'
import www2 from '../../../assets/visual/bx_www/www_002.png'
import www3 from '../../../assets/visual/bx_www/www_003.png'
import www4 from '../../../assets/visual/bx_www/www_004.png'
import www5 from '../../../assets/visual/bx_www/www_005.png'
import www6 from '../../../assets/visual/bx_www/www_006.png'
import www7 from '../../../assets/visual/bx_www/www_007.png'
import www8 from '../../../assets/visual/bx_www/www_008.png'
import www9 from '../../../assets/visual/bx_www/www_009.png'
import www10 from '../../../assets/visual/bx_www/www_010.png'
import www11 from '../../../assets/visual/bx_www/www_011.png'
import www12 from '../../../assets/visual/bx_www/www_012.png'
import ChevronRightArrow from '../../../assets/ChevronArrow.svg'



function VisualPost5() {
    return (
        <div className='serve-content-body'>
            <img className='content-img' src={www0} alt="" />
            <div className='black-back'>
            <img className='content-img' src={www1} alt="" />
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/bHhf5qY_WHQ`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <img className='content-img' src={www2} alt="" />
            <img className='content-img' src={www3} alt="" />
            <img className='content-img' src={www4} alt="" />
            <div className='content-video' >
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/JZy88l44miw`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <br></br>
            <br></br>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/K-jFqz6niuU?feature=share`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            </div>
            <img className='content-img' src={www5} alt="" />
            <img className='content-img' src={www6} alt="" />
            <img className='content-img' src={www7} alt="" />
            <div className='black-back'>
            <img className='content-img' src={www8} alt="" />
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/mar6RTG_lPo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <img className='content-img' src={www9} alt="" />
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/BtNhQ7dfg40`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/jqUXc7DluHw`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/2T3w_bCfhxg`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            </div>
            <img className='content-img' src={www10} alt="" />
            <img className='content-img' src={www11} alt="" />
            <img className='content-img' src={www12} alt="" />
            <br></br>
            <br></br>
            <img className='arrow' src={ChevronRightArrow} alt="" /><br></br>
            <a href='https://wwweb.kr'>WWW 사이트 보러가기 </a>
        </div>
    )
}

export default VisualPost5
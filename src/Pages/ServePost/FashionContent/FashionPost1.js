import React from 'react'

import '../ServePost.css'

import quench1 from '../../../assets/fashion/lookbook_quench/quench_001.png'
import quench2 from '../../../assets/fashion/lookbook_quench/quench_002.png'
import quench3 from '../../../assets/fashion/lookbook_quench/quench_003.png'
import quench4 from '../../../assets/fashion/lookbook_quench/quench_004.png'

function FashionPost1() {
    return (
        <div className='serve-content-body'>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/O7e000pDVp4`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <img className='content-img' src={quench1} alt="" />
            <img className='content-img' src={quench2} alt="" />
            <img className='content-img' src={quench3} alt="" />
            <img className='content-img' src={quench4} alt="" />
        </div>
    )
}

export default FashionPost1

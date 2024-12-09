import React from 'react'

import '../ServePost.css'

import pop1 from '../../../assets/media/animation_pop/pop_001.png'
import pop2 from '../../../assets/media/animation_pop/pop_002.png'

function FashionPost4() {

    return (
        <div className='serve-content-body'>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/X3LXuiwlLH8`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <img className='content-img' src={pop1} alt="" />
            <img className='content-img' src={pop2} alt="" />
        </div>
    )
}


export default FashionPost4

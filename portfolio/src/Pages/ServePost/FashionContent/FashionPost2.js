import React from 'react'

import '../ServePost.css'

import q2 from '../../../assets/fashion/film_Q/q_002.png'
import q3 from '../../../assets/fashion/film_Q/q_003.png'

function FashionPost2() {

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
            <img className='content-img' src={q2} alt="" />
            <img className='content-img' src={q3} alt="" />
        </div>
    )
}


export default FashionPost2


import React from 'react'

import '../ServePost.css'

import famsupport1 from '../../../assets/media/uiux_famsupport/famsupport_001.png'
import famsupport2 from '../../../assets/media/uiux_famsupport/famsupport_002.png'
import famsupport3 from '../../../assets/media/uiux_famsupport/famsupport_003.png'

function MediaPost4() {

    return (
        <div className='serve-content-body'>
            <div className='content-video'>
                <iframe
                    className='responsive-iframe'
                    src={`https://www.youtube.com/embed/0OMM8Ao4KIg`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <img className='content-img' src={famsupport1} alt="" />
            <img className='content-img' src={famsupport2} alt="" />
            <img className='content-img' src={famsupport3} alt="" />
        </div>
    )
}

<<<<<<< HEAD
export default MediaPost4
=======
export default MediaPost4

export default MediaPost4
>>>>>>> f1b4eb35fa6965e6a4c6de61e3393c94a4c03677

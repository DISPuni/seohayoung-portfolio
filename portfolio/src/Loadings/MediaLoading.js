import React from 'react'

import './ServeLoading.css';

import media from '../assets/gifs/media.gif'

function MediaLoading() {
    return (
        <div className='page flex serve-loading'>
            <img id='mediaLogo' className='logo margin-auto' src={media} alt='media design logo'/>
        </div>
    )
}

export default MediaLoading
import React from 'react'

import './ServeLoading.css'

import fashionLoading from '../assets/gifs/fashion.gif'

function FashionLoading() {
    return (
        <div className='page flex serve-loading'>
            <img id='fashionLogo' className='logo margin-auto' src={fashionLoading} alt='fashion logo'/>
        </div>
    )
}

export default FashionLoading
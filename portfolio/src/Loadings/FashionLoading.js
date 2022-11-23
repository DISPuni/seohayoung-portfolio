import React from 'react'

import './ServeLoading.css'

import fashionLoading from '../assets/icons/fashion_icon.svg'

function FashionLoading() {
    return (
        <div className='page flex serve-loading'>
            <img id='fashionLogo' className='margin-auto serve-logo' src={fashionLoading} alt='fashion logo'/>
        </div>
    )
}

export default FashionLoading
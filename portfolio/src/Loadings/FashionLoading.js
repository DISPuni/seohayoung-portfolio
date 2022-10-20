import React from 'react'

import './FashionLoading.css'

import fashionLoading from '../assets/fashion_icon.svg'

function FashionLoading() {
    return (
        <div className='page flex'>
            <img id='fashionLogo' className='margin-auto' src={fashionLoading} alt='fashion logo'/>
        </div>
    )
}

export default FashionLoading
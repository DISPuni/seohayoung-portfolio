import React from 'react'
import './Start.css'

import startLoading from '../assets/start_loading.gif';

function Start() {
    return (
        <div className='page flex-col'>
            <img id='startLoadingImg' className='margin-auto' src={startLoading} alt='start loading img' />
            <div id='startLoadingMessage' className='medium margin-auto'>Loading...</div>
        </div>
    )
}

export default Start
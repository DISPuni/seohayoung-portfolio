import React from 'react'

import visual from '../assets/gifs/visual.gif'

function VisualLoading() {
    return (
        <div className='page flex serve-loading'>
            <img id='visualLogo' className='logo margin-auto' src={visual} alt='visual design logo'/>
        </div>
    )
}

export default VisualLoading
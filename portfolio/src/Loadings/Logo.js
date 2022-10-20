import React from 'react'

import logo from '../assets/disp_mainlogo.svg'

function Logo() {
    return (
        <div className='page flex'>
            <img className='text-logo margin-auto' src={logo} alt='main logo' />
        </div>
    )
}

export default Logo
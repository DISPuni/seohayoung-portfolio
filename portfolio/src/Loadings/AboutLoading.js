import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/icons/disp_mainlogo.svg'

function AboutLoading() {

    let navigate = useNavigate();
    function toAbout() {
        navigate('/about')
    }

    useEffect(() => {
        setTimeout(() => {
            toAbout();
        }, 3000);
    }, [])

    return (
        <div className='page flex'>
            <img className='text-logo margin-auto' src={logo} alt='main logo' />
        </div>
    )
}

export default AboutLoading
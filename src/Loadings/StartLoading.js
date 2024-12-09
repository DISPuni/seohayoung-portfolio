import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './StartLoading.css'

import startLoading from '../assets/gifs/loading.gif';

function Start() {

    let navigate = useNavigate();
    function toHome() {
        navigate('/home')
    }

    useEffect(() => {
        setTimeout(() => {
            toHome();
        }, 3000);
    }, [])


    return (
        <div className='page flex-col'>
            <img id='startLoadingImg' className='margin-auto' src={startLoading} alt='start loading img' />
            <div id='startLoadingMessage' className='medium margin-auto'>Loading...</div>
        </div>
    )
}

export default Start
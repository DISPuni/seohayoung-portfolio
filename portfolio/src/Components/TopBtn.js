import React from 'react'

import './TopBtn.css'

import topBtn from '../assets/about/top_botton.svg'

function TopBtn() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    return (
        <img className='topBtn' src={topBtn} alt="" onClick={scrollToTop} />
    )
}

export default TopBtn
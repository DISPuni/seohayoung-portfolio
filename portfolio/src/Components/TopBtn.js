import React from 'react'

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
        <img className='topBtn' src={topBtn} alt="" style={{
            position: 'fixed',
            right: '6.25rem',
            bottom: '7.438rem',
            cursor: 'pointer',
            zIndex: 1
        }} onClick={scrollToTop} />
    )
}

export default TopBtn
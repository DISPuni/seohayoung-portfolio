import React from 'react'

import '../ServePost.css'

import quench1 from '../../../assets/fashion/lookbook_quench/quench_001.png'
import quench2 from '../../../assets/fashion/lookbook_quench/quench_002.png'

function FashionPost1() {
    return (
        <div className='serve-content-body'>
            <img className='content-img' src={quench1} alt="" />
            <img className='content-img' src={quench2} alt="" />
        </div>
    )
}

export default FashionPost1

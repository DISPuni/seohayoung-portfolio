import React from 'react'

import blog from '../assets/icons/blog.svg'

function Blog() {
    return (
        <div className='page flex'>
            <img className='text-logo margin-auto' src={blog} alt='blog logo'/>
        </div>
    )
}

export default Blog
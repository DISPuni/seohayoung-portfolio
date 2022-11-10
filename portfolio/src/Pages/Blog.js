import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './Blog.css'

import blog from '../assets/icons/blog.svg'

import NavHeader from '../Components/NavHeader'
import Card from '../Components/Card'
import SecondFooter from '../Components/SecondFooter'

import example1 from '../assets/examples/example1.jpeg'
import example2 from '../assets/examples/example2.png'
import example3 from '../assets/examples/example3.jpeg'
import example4 from '../assets/examples/example4.jpeg'
import example5 from '../assets/examples/example5.jpg'
import example6 from '../assets/examples/example6.jpeg'

function Blog() {

    const [isLoading, setIsLoading] = useState(true)

    let navigate = useNavigate();
    function toBlogPost(postId) {
        navigate('/blog/' + postId)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, [])

    return (
        <div className='page'>
            {isLoading ?
                <div className='page flex'>
                    <img className='text-logo margin-auto' src={blog} alt='blog logo' />
                </div> :
                <div id='blog' className='page'>
                    <NavHeader isNav={true} isAbout={false} isBlog={true} />
                    <div id="blogBody" className='flex-col'>
                        <img id='blogLogo' src={blog} alt="blog logo" />
                        <div className='flex-col'>
                            <div className='cards-row'>
                                <div onClick={() => toBlogPost(1)}><Card title='#1. 광고 플랫폼에 대하여' image={example1} /></div>
                                <div onClick={() => toBlogPost(2)}><Card title='#2' image={example2} /></div>
                            </div>
                            <div className='cards-row'>
                                <Card title='#3' image={example3} />
                                <Card title='#4' image={example4} />
                            </div>
                            <div className='cards-row'>
                                <Card title='#5' image={example5} />
                                <Card title='#6' image={example6} />
                            </div>
                        </div>
                    </div>
                    <SecondFooter/>
                </div>}
        </div>
    )
}

export default Blog
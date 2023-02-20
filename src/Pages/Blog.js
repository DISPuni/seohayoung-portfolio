import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './Blog.css'

import blog from '../assets/icons/blog.svg'

import NavHeader from '../Components/NavHeader'
import MobileNavHeader from '../Components/MobileNavHeader'
import MobileNav from '../Components/MobileNav'
import Card from '../Components/Card'
import SecondFooter from '../Components/SecondFooter'
import MobileFooter from '../Components/MobileFooter'

import example1 from '../assets/examples/example1.png'
import example2 from '../assets/examples/example2.png'
import example3 from '../assets/examples/example3.jpeg'
import example4 from '../assets/examples/example4.jpeg'
import example5 from '../assets/examples/example5.jpg'
import example6 from '../assets/examples/example6.jpeg'

function Blog() {

    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    <img id='blogLoading' className='text-logo margin-auto' src={blog} alt='blog logo' />
                </div> :
                <div id='blog' className='page'>
                    <NavHeader isNav={true} isAbout={false} isBlog={true} />
                    <MobileNavHeader setIsModalOpen={setIsModalOpen} />
                    {isModalOpen ? <MobileNav setIsModalOpen={setIsModalOpen} /> :null}
                    <div id="blogBody" className='flex-col'>
                        <img id='blogLogo' src={blog} alt="blog logo" />
                        <div className='flex-col'>
                        
                            {/* <div className='cards-row'>
                                <div className="first-card"><Card title='#3' image={example3} /></div>
                                <div className="second-card"><Card title='#4' image={example4} /></div>
                            </div>
                            <div className='cards-row'>
                                <div className="first-card"><Card title='#5' image={example5} /></div>
                                <div className="second-card"><Card title='#6' image={example6} /></div>
                            </div> */}
                            <div className='cards-row'>
                                <div className='first-card' onClick={() => toBlogPost(2)}><Card title='#2. 쓰지않는 금연어플들' image={example2} /></div>
                                <div className="second-card" onClick={() => toBlogPost(1)}><Card title='#1. DISP Site history' image={example1} /></div>
                            </div>
                        </div>
                    </div>
                    <SecondFooter/>
                    <MobileFooter/>
                </div>}
        </div>
    )
}

export default Blog

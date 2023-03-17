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

import main1 from '../assets/blog/main1.png'
import main2 from '../assets/blog/main2.png'
import main3 from '../assets/blog/main3.jpg'
import main4 from '../assets/blog/main4.png'
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

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      

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
                                <div className="first-card"><Card title='#5' image={example5} /></div>
                                <div className="second-card"><Card title='#6' image={example6} /></div>
                            </div> */}
                            <div className='cards-row'>
                                <div className="first-card" onClick={() => toBlogPost(4)}><Card title='#4. 패스트캠퍼스 + PLUS X SHARE X 실무마스터 패키지' image={main4} /></div>
                                <div className="second-card" onClick={() => toBlogPost(3)}><Card title='#3. 디자인과 인공지능' image={main3} /></div>
                            </div>
                            <div className='cards-row'>
                                <div className='first-card' onClick={() => toBlogPost(2)}><Card title='#2. 쓰지않는 금연어플들' image={main2} /></div>
                                <div className="second-card" onClick={() => toBlogPost(1)}><Card title='#1. DISP Site history' image={main1} /></div>
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

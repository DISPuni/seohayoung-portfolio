import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './BlogPost.css'

import NavHeader from '../../Components/NavHeader'
import SecondFooter from '../../Components/SecondFooter'
import TopBtn from '../../Components/TopBtn'
import MobileNavHeader from '../../Components/MobileNavHeader'
import MobileNav from '../../Components/MobileNav'
import MobileFooter from '../../Components/MobileFooter'

import blog from '../../assets/icons/blog.svg'

import Post1 from './BlogContent/Post1'
import Post2 from './BlogContent/Post2'

function BlogPostTemplate() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const postTitle = [
        { id:1, title:'#1. 광고 플랫폼에 대하여' , subtitle:'subtitle' },
        { id:2, title:'#2' , subtitle:'subtitle' },
    ]
    const [post, setPost] = useState()

    let postId = useParams();
    let navigate = useNavigate();
    function toBlog() {
        navigate('/blog')
    }

    useEffect(() => {
        if (postId.id === '1') {
            setPost(<Post1 />)
        }
        else if (postId.id === '2') {
            setPost(<Post2 />)
        }
    }, [])
    

    return (
        <div className='page'>
            <NavHeader isNav={true} isAbout={false} isBlog={true} />
            <MobileNavHeader setIsModalOpen={setIsModalOpen} />
            {isModalOpen ? <MobileNav setIsModalOpen={setIsModalOpen} /> : null}
            <div className='blog-post-body'>
                <TopBtn />
                <div className='back-btn'><div onClick={toBlog}>Back</div></div>
                <img className='blog-post-logo' src={blog} alt="" />
                <div className='blog-post-title'>{postTitle[postId.id-1].title}</div>
                <div className='blog-post-subtitle'>{postTitle[postId.id-1].subtitle}</div>
                {post}
            </div>
            <SecondFooter />
            <MobileFooter />
        </div>
    )
}

export default BlogPostTemplate
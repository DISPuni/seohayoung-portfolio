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
import Post3 from './BlogContent/Post3'
import Post4 from './BlogContent/Post4'

function BlogPostTemplate() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const postTitle = [
        { id:1, title:'#1. DISP Site history' , subtitle:'사이트의 존재 이유' },
        { id:2, title:'#2. 쓰지않는 금연어플들' , subtitle:'고쳐서 정리하기' },
        { id:3, title:'#3. 플러스엑스 UIUX 강의 후기' , subtitle:'생각정리 겸, 후기 이벤트 겸..' },
        { id:4, title:'#4. 디자인과 인공지능' , subtitle:'인공지능을 이용하는 방법' },
    ]
    const [post, setPost] = useState()

    let postId = useParams();
    let navigate = useNavigate();
    function toBlog() {
        navigate('/blog')
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    useEffect(() => {
        if (postId.id === '1') {
            setPost(<Post1 />)
        }
        else if (postId.id === '2') {
            setPost(<Post2 />)
        }
        else if (postId.id === '3') {
            setPost(<Post3 />)
        }
        else if (postId.id === '4') {
            setPost(<Post4 />)
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
                <div className='serve-filter'>Blog</div>
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

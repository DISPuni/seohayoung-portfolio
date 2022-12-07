import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Draggable from 'react-draggable'

import './Home.css'
import '../Components/MobileNav.css'

import NavHeader from '../Components/NavHeader'
import MobileNavHeader from '../Components/MobileNavHeader'
import MobileNav from '../Components/MobileNav'
import Footer from '../Components/Footer'

import videoPlayer from '../assets/main/main_img_video_auto_play.svg'
import videoPlayer2 from '../assets/main/main_img_video_hover_off_botton.svg'
import blog from '../assets/main/main_img_blog.svg'
import blogMobile from '../assets/main/main_img_blog.png'
import blogHover from '../assets/main/main_img_blog_hover.svg'
import media from '../assets/main/main_img_media.svg'
import mediaMobile from '../assets/main/main_m_img_media.png'
import mediaHover from '../assets/main/main_img_media_hover.svg'
import fashion from '../assets/main/main_img_fahion.svg'
import fashionMobile from '../assets/main/main_m_img_fashion.png'
import fashionHover from '../assets/main/main_img_fahion_hover.svg'
import visual from '../assets/main/main_img_visual.svg'
import visualMobile from '../assets/main/main_m_img_visual.png'
import visualHover from '../assets/main/main_img_visual_hover.svg'
import pill from '../assets/main/main_img_pill.svg'
import about from '../assets/main/main_img_about.svg'
import aboutMobile from '../assets/main/main_img_about.png'
import aboutHover from '../assets/main/main_img_about_hover.svg'

import video from '../assets/intro_video.mp4'

function Home() {

    const videoRef = useRef(null);

    const [blogSrc, setBlogSrc] = useState(blog);
    const [mediaSrc, setMediaSrc] = useState(media);
    const [fashionSrc, setFashionSrc] = useState(fashion);
    const [visualSrc, setVisualSrc] = useState(visual);
    const [aboutSrc, setAboutSrc] = useState(about);
    const [isModalOpen, setIsModalOpen] = useState(false);

    let navigate = useNavigate();
    function toAbout() {
        navigate('/about')
    }
    function toBlog() {
        navigate('/blog')
    }
    function toFashion() {
        navigate('/fashion')
    }
    function toVisual() {
        navigate('/visual')
    }
    function toMedia() {
        navigate('/media')
    }

    function videoPause() {
        if (videoRef.current.paused) {
            console.log('puaused');
            videoRef.current.play();
        } else {
            console.log('played');
            videoRef.current.pause();
        }
    }

    function handleModal() {
        console.log('before: ', isModalOpen)
        setIsModalOpen(isModalOpen)
        console.log('after: ', isModalOpen)
    }
    function showModal() {
        setIsModalOpen(true)
    }

    return (
        <div id='home' className='page flex-col'>
            <NavHeader isNav={false} isAbout={false} isBlog={false} />
            <MobileNavHeader setIsModalOpen={setIsModalOpen}/>
            {isModalOpen ? <MobileNav setIsModalOpen={setIsModalOpen}/>:null}
            <div id='homeBody'>
                <Draggable>
                    <div id='draggableItem'>
                        <p id='draggableText'>Choose the one you want and click</p>
                        <div id='draggableShadow' />
                    </div>
                </Draggable>
                <div id='homeItems' className='flex'>
                    <div id='player'>
                        <img id='videoPlayer' src={videoPlayer} alt="video player"/>
                        <img id='videoPlayer2' src={videoPlayer2} alt="video player"/>
                        <video id='videoSection'autoPlay loop muted ref={videoRef} onClick={() => videoPause()}>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                    <img id='mainBlogIcon' src={blogSrc} alt="blog icon" onMouseOver={() => setBlogSrc(blogHover)} onMouseLeave={() => setBlogSrc(blog)} onClick={() => toBlog()}/>
                    <img src={blogMobile} alt="" id="mainBlogIconMobile" onClick={() => toBlog()}/>
                    <img id='mainMediaIcon' src={mediaSrc} alt="media design icon" onMouseOver={() => setMediaSrc(mediaHover)} onMouseLeave={() => setMediaSrc(media)} onClick={toMedia}/>
                    <img id='mainMediaIconMobile' src={mediaMobile} alt="" onClick={toMedia}/>
                    <img id='mainFashionIcon' src={fashionSrc} alt="fashion design icon" onMouseOver={() => setFashionSrc(fashionHover)} onMouseLeave={() => setFashionSrc(fashion)} onClick={toFashion}/>
                    <img id='mainFashionIconMobile' src={fashionMobile} alt="" onClick={toFashion}/>
                    <img id='mainVisualIcon' src={visualSrc} alt="visual design icon" onMouseOver={() => setVisualSrc(visualHover)} onMouseLeave={() => setVisualSrc(visual)} onClick={toVisual}/>
                    <img id='mainVisualIconMobile' src={visualMobile} alt=""onClick={toVisual} />
                    <img id='pill' src={pill} alt="main pill img"/>
                    <img id='about' src={aboutSrc} alt="main about img" onMouseOver={() => setAboutSrc(aboutHover)} onMouseLeave={() => setAboutSrc(about)} onClick={toAbout}/>
                    <img src={aboutMobile} alt="" id="aboutMobile" onClick={toAbout}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Draggable from 'react-draggable'

import './Home.css'

import NavHeader from '../Components/NavHeader'
import Footer from '../Components/Footer'

import videoPlayer from '../assets/main/main_img_video_auto_play.svg'
import blog from '../assets/main/main_img_blog.svg'
import blogHover from '../assets/main/main_img_blog_hover.svg'
import media from '../assets/main/main_img_media.svg'
import mediaHover from '../assets/main/main_img_media_hover.svg'
import fashion from '../assets/main/main_img_fahion.svg'
import fashionHover from '../assets/main/main_img_fahion_hover.svg'
import visual from '../assets/main/main_img_visual.svg'
import visualHover from '../assets/main/main_img_visual_hover.svg'
import pill from '../assets/main/main_img_pill.svg'
import about from '../assets/main/main_img_about.svg'
import aboutHover from '../assets/main/main_img_about_hover.svg'

function Home() {

    const [blogSrc, setBlogSrc] = useState(blog);
    const [mediaSrc, setMediaSrc] = useState(media);
    const [fashionSrc, setFashionSrc] = useState(fashion);
    const [visualSrc, setVisualSrc] = useState(visual);
    const [aboutSrc, setAboutSrc] = useState(about);

    let navigate = useNavigate();
    function toAbout() {
        navigate('/about')
    }

    return (
        <div id='home' className='page flex-col'>
            <NavHeader isNav={false} isAbout={false} isBlog={false}/>
            <div id='homeBody'>
                <Draggable id='draggable'>
                    <div id='draggableItem'>
                        <p id='draggableText'>Choose the one you want and click</p>
                        <div id='draggableShadow' />
                    </div>
                </Draggable>
                <div id='homeItems' className='flex'>
                    <div id='player'>
                        <img id='videoPlayer' src={videoPlayer} alt="video player"/>
                        {/* <div id='videoSection'>dd</div> */}
                    </div>
                    <img id='blogIcon' src={blogSrc} alt="blog icon" onMouseOver={() => setBlogSrc(blogHover)} onMouseLeave={() => setBlogSrc(blog)}/>
                    <img id='mediaIcon' src={mediaSrc} alt="media design icon" onMouseOver={() => setMediaSrc(mediaHover)} onMouseLeave={() => setMediaSrc(media)} />
                    <img id='fashionIcon' src={fashionSrc} alt="fashion design icon" onMouseOver={() => setFashionSrc(fashionHover)} onMouseLeave={() => setFashionSrc(fashion)} />
                    <img id='visualIcon' src={visualSrc} alt="visual design icon" onMouseOver={() => setVisualSrc(visualHover)} onMouseLeave={() => setVisualSrc(visual)} />
                    <img id='pill' src={pill} alt="main pill img"/>
                    <img id='about' src={aboutSrc} alt="main about img" onMouseOver={() => setAboutSrc(aboutHover)} onMouseLeave={() => setAboutSrc(about)} onClick={(() => toAbout())}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './ServePost.css'

import NavHeader from '../../Components/NavHeader'
import SecondFooter from '../../Components/SecondFooter'
import TopBtn from '../../Components/TopBtn'
import MobileNavHeader from '../../Components/MobileNavHeader'
import MobileNav from '../../Components/MobileNav'
import MobileFooter from '../../Components/MobileFooter'

import visual from '../../assets/icons/visual_icon.svg'

import VisualPost1 from './VisualContent/VisualPost1'
import VisualPost2 from './VisualContent/VisualPost2'
import VisualPost3 from './VisualContent/VisualPost3'
import VisualPost4 from './VisualContent/VisualPost4'
import VisualPost5 from './VisualContent/VisualPost5'
import NotFound from '../NotFound'

function VisualPostHeader() {

    const postInfo = [
        { id: 1, title: 'Anigom', date: '21.02.01 ~ 21.02.13', type: 'Graphic' },
        { id: 2, title: 'Camping', date: '19.11.02 ~ 19.12.01', type: 'Graphic' },
        { id: 3, title: 'Jua Poster', date: '22.12.24 ~', type: 'Editorial' },
        { id: 4, title: 'Pyeonteilbar', date: '22.05.07 ~ 22.12.07', type: 'Graphic' },
        { id: 5, title: 'WWW', date: '21.12.20 ~ 22.12.17', type: 'BX' },
    ]
    const [post, setPost] = useState();
    const [notFound, setNotFound] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    let postId = useParams();
    let navigate = useNavigate();
    function toVisual() {
        navigate('/visual')
    }

    useEffect(() => {
        if (postId.id === '1') {
            setNotFound(false)
            setPost(<VisualPost1 />)
        }
        else if (postId.id === '2') {
            setNotFound(false)
            setPost(<VisualPost2 />)
        }
        else if (postId.id === '3') {
            setNotFound(false)
            setPost(<VisualPost3 />)
        }
        else if (postId.id === '4') {
            setNotFound(false)
            setPost(<VisualPost4 />)
        }
        else if (postId.id === '5') {
            setNotFound(false)
            setPost(<VisualPost5 />)
        }
    }, [])

    return (
        <div className='page'>
            <NavHeader isNav={true} isAbout={false} isBlog={false} />
            <MobileNavHeader setIsModalOpen={setIsModalOpen} />
            {isModalOpen ? <MobileNav setIsModalOpen={setIsModalOpen} /> : null}
            {!notFound ?
                <div className='serve-post-body'>
                    <TopBtn />
                    <div className='serve-post-btn-n-filter'>
                        <div className='serve-back-btn' onClick={toVisual}>Back</div>
                        <div className='serve-filter'>{postInfo[postId.id - 1].type}</div>
                    </div>
                    <img id='servePostLogoFashion' src={visual} alt="" />
                    <div className='serve-post-title'>{postInfo[postId.id - 1].title}</div>
                    <div className='serve-post-subtitle'>{postInfo[postId.id - 1].date}</div>
                    {post}
                </div>
                :<NotFound />}
            <SecondFooter fashion={false} visual={true} media={false}/>
            <MobileFooter />
        </div>
    )
}

export default VisualPostHeader
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
import NotFound from '../NotFound'

function VisualPostHeader() {

    const postInfo = [
        { id: 1, title: 'PUUNI', date: '22.03.22~', type: 'BX' },
        { id: 2, title: 'test1', date: '22.12.24~', type: 'BX' },
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
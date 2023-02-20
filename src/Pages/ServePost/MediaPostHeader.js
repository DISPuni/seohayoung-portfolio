import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './ServePost.css'

import NavHeader from '../../Components/NavHeader'
import SecondFooter from '../../Components/SecondFooter'
import TopBtn from '../../Components/TopBtn'
import MobileNavHeader from '../../Components/MobileNavHeader'
import MobileNav from '../../Components/MobileNav'
import MobileFooter from '../../Components/MobileFooter'

import media from '../../assets/icons/media_icon.svg'

import MediaPost1 from './MediaContent/MediaPost1'
import MediaPost2 from './MediaContent/MediaPost2'
import MediaPost3 from './MediaContent/MediaPost3'
import MediaPost4 from './MediaContent/MediaPost4'
import MediaPost5 from './MediaContent/MediaPost5'
import MediaPost6 from './MediaContent/MediaPost6'
import MediaPost7 from './MediaContent/MediaPost7'
import MediaPost8 from './MediaContent/MediaPost8'
import MediaPost9 from './MediaContent/MediaPost9'
import MediaPost10 from './MediaContent/MediaPost10'
import NotFound from '../NotFound'

function MediaPostHeadser() {

    const postInfo = [
        { id: 1, title: 'Pop', date: '20.09.12 ~ 21.05.28', type: 'Animation' },
        { id: 2, title: 'Shimshim', date: '21.06.15 ~ 22.03.19', type: 'Interaction' },
        { id: 3, title: 'Souvenir', date: '20.05.19 ~ 20.07.04', type: 'Motion' },
        { id: 4, title: 'Famsupport', date: '20.09.10 ~ 21.05.28', type: 'UIUX' },
        { id: 5, title: 'Today Who', date: '21.08.30 ~ 21.09.27', type: 'UIUX' },
        { id: 6, title: 'Geumyeonmode', date: '22.05.28 ~ 22.08.13', type: 'UIUX' },
        { id: 7, title: 'Ozel', date: '21.01.15 ~ 21.02.29', type: 'UIUX' },
        { id: 8, title: 'Omni Counselor', date: '21.07.12 ~ 21.10.12', type: 'Motion' },
        { id: 9, title: 'Oneul', date: '22.08.25 ~ 22.10.14', type: 'UIUX' },
        { id: 10, title: 'Oliveyoung', date: '21.12.20 ~ 23.09.01', type: 'UIUX' },
    ]
    const [post, setPost] = useState()
    const [notFound, setNotFound] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);

    let postId = useParams();
    let navigate = useNavigate();
    function toMedia() {
        navigate('/media')
    }

    useEffect(() => {
        if (postId.id === '1') {
            setNotFound(false)
            setPost(<MediaPost1 />)
        }
        else if (postId.id === '2') {
            setNotFound(false)
            setPost(<MediaPost2 />)
        }
        else if (postId.id === '3') {
            setNotFound(false)
            setPost(<MediaPost3 />)
        }
        else if (postId.id === '4') {
            setNotFound(false)
            setPost(<MediaPost4 />)
        }
        else if (postId.id === '5') {
            setNotFound(false)
            setPost(<MediaPost5 />)
        }

        else if (postId.id === '6') {
            setNotFound(false)
            setPost(<MediaPost6 />)
        }

        else if (postId.id === '7') {
            setNotFound(false)
            setPost(<MediaPost7 />)
        }

        else if (postId.id === '8') {
            setNotFound(false)
            setPost(<MediaPost8 />)
        }

        else if (postId.id === '9') {
            setNotFound(false)
            setPost(<MediaPost9 />)
        }

        else if (postId.id === '10') {
            setNotFound(false)
            setPost(<MediaPost10 />)
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
                        <div className='serve-back-btn' onClick={toMedia}>Back</div>
                        <div className='serve-filter'>{postInfo[postId.id - 1].type}</div>
                    </div>
                    <img id='servePostLogoFashion' src={media} alt="" />
                    <div className='serve-post-title'>{postInfo[postId.id - 1].title}</div>
                    <div className='serve-post-subtitle'>{postInfo[postId.id - 1].date}</div>
                    {post}
                </div>
                :<NotFound />}
            <SecondFooter fashion={false} visual={false} media={true}/>
            <MobileFooter />
        </div>
    )
}

export default MediaPostHeadser

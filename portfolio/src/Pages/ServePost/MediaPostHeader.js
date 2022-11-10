import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './ServePost.css'

import NavHeader from '../../Components/NavHeader'
import SecondFooter from '../../Components/SecondFooter'
import TopBtn from '../../Components/TopBtn'

import media from '../../assets/icons/media_icon.svg'

import MediaPost1 from './MediaContent/MediaPost1'
import MediaPost2 from './MediaContent/MediaPost2'
import NotFound from '../NotFound'

function MediaPostHeadser() {

    const postInfo = [
        { id: 1, title: 'DD', date: '22.03.22~', type: 'UIUX' },
        { id: 2, title: 'test1', date: '22.12.24~', type: 'UIUX' },
    ]
    const [post, setPost] = useState()
    const [notFound, setNotFound] = useState(true)

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
    }, [])

    return (
        <div className='page'>
            <NavHeader isNav={true} isAbout={false} isBlog={false} />
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
        </div>
    )
}

export default MediaPostHeadser
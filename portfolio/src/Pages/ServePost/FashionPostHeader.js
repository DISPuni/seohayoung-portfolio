import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './ServePost.css'

import NavHeader from '../../Components/NavHeader'
import SecondFooter from '../../Components/SecondFooter'
import TopBtn from '../../Components/TopBtn'

import fashion from '../../assets/icons/fashion_icon.svg'

import FashionPost1 from './FashionContent/FashionPost1'
import FashionPost2 from './FashionContent/FashionPost2'
import NotFound from '../NotFound'

function FashionPostHeader() {

    const postInfo = [
        { id: 1, title: 'FREEDOM', date: '22.03.22~', type: 'Lookbook' },
        { id: 2, title: 'test1', date: '22.12.24~', type: 'Lookbook' },
    ]
    const [post, setPost] = useState()
    const [notFound, setNotFound] = useState(true)

    let postId = useParams();
    let navigate = useNavigate();
    function toFahion() {
        navigate('/fashion')
    }

    useEffect(() => {
        if (postId.id === '1') {
            setNotFound(false)
            setPost(<FashionPost1 />)
        }
        else if (postId.id === '2') {
            setNotFound(false)
            setPost(<FashionPost2 />)
        }
    }, [])

    return (
        <div className='page'>
            <NavHeader isNav={true} isAbout={false} isBlog={false} />
            {!notFound ?
                <div className='serve-post-body'>
                    <TopBtn />
                    <div className='serve-post-btn-n-filter'>
                        <div className='serve-back-btn' onClick={toFahion}>Back</div>
                        <div className='serve-filter'>{postInfo[postId.id - 1].type}</div>
                    </div>
                    <img id='servePostLogoFashion' src={fashion} alt="" />
                    <div className='serve-post-title'>{postInfo[postId.id - 1].title}</div>
                    <div className='serve-post-subtitle'>{postInfo[postId.id - 1].date}</div>
                    {post}
                </div>
                : <NotFound />}
            <SecondFooter fashion={true} visual={false} media={false}/>
        </div>
    )
}

export default FashionPostHeader
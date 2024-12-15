import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './ServePost.css'

import NavHeader from '../../Components/NavHeader'
import SecondFooter from '../../Components/SecondFooter'
import TopBtn from '../../Components/TopBtn'
import MobileNavHeader from '../../Components/MobileNavHeader'
import MobileNav from '../../Components/MobileNav'
import MobileFooter from '../../Components/MobileFooter'

import fashion from '../../assets/icons/fashion_icon.svg'

import FashionPost1 from './FashionContent/FashionPost1'
import FashionPost2 from './FashionContent/FashionPost2'
import FashionPost3 from './FashionContent/FashionPost3'
import FashionPost4 from './FashionContent/FashionPost4'
import FashionPost5 from './FashionContent/FashionPost5'
import FashionPost6 from './FashionContent/FashionPost6'
import FashionPost7 from './FashionContent/FashionPost7'
import NotFound from '../NotFound'

function FashionPostHeader() {

    const postInfo = [
        { id: 1, title: 'Link', date: '23.04.27~23.06.08', type: 'Textile' },
        { id: 2, title: '[?]', date: '21.04.15~21.08.20', type: 'Film' },
        { id: 3, title: 'FREEDOM', date: '21.10.01~21.12.19', type: 'Lookbook' },
        { id: 4, title: 'Neomoda', date: '23.05.11~23.06.08', type: 'Textile' },
        { id: 5, title: 'Momentum', date: '23.05.11~23.06.08~', type: 'Item' },
        { id: 6, title: 'Rescue', date: '23.03.01~23.05.30', type: 'Lookbook' },
        { id: 7, title: 'KHU Show', date: '24.04.05~24.05.30', type: 'Film' },
    ]
    const [post, setPost] = useState()
    const [notFound, setNotFound] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);

    let postId = useParams();
    let navigate = useNavigate();
    function toFahion() {
        navigate('/fashion')
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    useEffect(() => {
        if (postId.id === '1') {
            setNotFound(false)
            setPost(<FashionPost1 />)
        }
        else if (postId.id === '2') {
            setNotFound(false)
            setPost(<FashionPost2 />)
        }
        else if (postId.id === '3') {
            setNotFound(false)
            setPost(<FashionPost3 />)
        }
        else if (postId.id === '4') {
            setNotFound(false)
            setPost(<FashionPost4 />)
        }
        else if (postId.id === '5') {
            setNotFound(false)
            setPost(<FashionPost5 />)
        }
        else if (postId.id === '6') {
            setNotFound(false)
            setPost(<FashionPost6 />)
        }
        else if (postId.id === '7') {
            setNotFound(false)
            setPost(<FashionPost7 />)
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
                        <div className='serve-back-btn' onClick={toFahion}>Back</div>
                        <div className='serve-filter'>{postInfo[postId.id - 1].type}</div>
                    </div>
                    <div className='serve-post-title'>{postInfo[postId.id - 1].title}</div>
                    <div className='serve-post-subtitle'>{postInfo[postId.id - 1].date}</div>
                    {post}
                </div>
                : <NotFound />}
            <SecondFooter fashion={true} visual={false} media={false}/>
            <MobileFooter />
        </div>
    )
}

export default FashionPostHeader

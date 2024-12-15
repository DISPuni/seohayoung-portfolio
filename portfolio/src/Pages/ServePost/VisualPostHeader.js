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
import VisualPost6 from './VisualContent/VisualPost6'
import VisualPost7 from './VisualContent/VisualPost7'
import VisualPost8 from './VisualContent/VisualPost8'
import VisualPost9 from './VisualContent/VisualPost9'
import VisualPost10 from './VisualContent/VisualPost10'
import VisualPost11 from './VisualContent/VisualPost11'
import VisualPost12 from './VisualContent/VisualPost12'
import VisualPost13 from './VisualContent/VisualPost13'
import VisualPost14 from './VisualContent/VisualPost14'
import VisualPost15 from './VisualContent/VisualPost15'
import VisualPost16 from './VisualContent/VisualPost16'
import VisualPost17 from './VisualContent/VisualPost17'
import VisualPost18 from './VisualContent/VisualPost18'
import NotFound from '../NotFound'

function VisualPostHeader() {

    const postInfo = [
        { id: 1, title: 'Link', date: '23.04.27~23.06.08', type: 'BX' },
        { id: 2, title: 'Link', date: '23.04.27~23.06.08', type: 'BX' },
        { id: 3, title: 'Within a trend', date: '23.03.19 ~ 23.05.01', type: 'Graphic' },
        { id: 4, title: 'Pyeonteilbar', date: '22.05.07 ~ 22.12.07', type: 'Graphic' },
        { id: 5, title: 'WWW', date: '22.08.12 ~ 22.12.17', type: 'BX' },
        { id: 6, title: 'Oliveyoung TV', date: '21.12.28 ~ 22.08.31', type: 'Contents' },
        { id: 7, title: 'Omni Counselor', date: '21.07.12 ~ 21.10.12', type: 'Contents' },
        { id: 8, title: 'Fregmentopia', date: '23.03.10 ~ 21.05.10', type: 'BX' },
        { id: 9, title: 'Oliveyoung Live', date: '21.12.28 ~ 22.08.31', type: 'Contents' },
        { id: 10, title: 'White night', date: '23.04.29 ~ 23.05.08', type: 'BX' },
        { id: 11, title: 'Watoon', date: '23.04.22 ~ 23.06.17', type: 'BX' },
        { id: 12, title: 'Pure Collection', date: '23.07.15 ~ 23.08.05', type: 'BX' },
        { id: 13, title: 'Take a rest', date: '23.02.11 ~ 24.01.06', type: 'Graphic' },
        { id: 14, title: 'HONO', date: '23.08.13 ~ 23.10.08', type: 'Graphic' },
        { id: 15, title: 'Cha Da Dam', date: '23.01.02 ~ 24.02.06', type: 'BX' },
        { id: 16, title: 'My Ocean', date: '23.11.13 ~ 24.06.06', type: 'Graphic' },
        { id: 17, title: 'NUVEO', date: '23.10.01 ~ 23.11.20', type: 'BX' },
        { id: 18, title: 'UNAURI', date: '24.09.29 ~ 23.11.10', type: 'Graphic' },
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
        window.scrollTo(0, 0);
      }, []);
      
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
        else if (postId.id === '6') {
            setNotFound(false)
            setPost(<VisualPost6 />)
        }
        else if (postId.id === '7') {
            setNotFound(false)
            setPost(<VisualPost7 />)
        }
        else if (postId.id === '8') {
            setNotFound(false)
            setPost(<VisualPost8 />)
        }
        else if (postId.id === '9') {
            setNotFound(false)
            setPost(<VisualPost9 />)
        }
        else if (postId.id === '10') {
            setNotFound(false)
            setPost(<VisualPost10 />)
        }
        else if (postId.id === '11') {
            setNotFound(false)
            setPost(<VisualPost11 />)
        }
        else if (postId.id === '12') {
            setNotFound(false)
            setPost(<VisualPost12 />)
        }
        else if (postId.id === '13') {
            setNotFound(false)
            setPost(<VisualPost13 />)
        }
        else if (postId.id === '14') {
            setNotFound(false)
            setPost(<VisualPost14 />)
        }
        else if (postId.id === '15') {
            setNotFound(false)
            setPost(<VisualPost15 />)
        }
        else if (postId.id === '16') {
            setNotFound(false)
            setPost(<VisualPost16 />)
        }
        else if (postId.id === '17') {
            setNotFound(false)
            setPost(<VisualPost17 />)
        }
        else if (postId.id === '18') {
            setNotFound(false)
            setPost(<VisualPost18 />)
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

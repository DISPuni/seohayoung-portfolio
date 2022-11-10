import React, { useState, useEffect } from 'react'

import './Serve.css'

import MediaLoading from '../Loadings/MediaLoading'
import NavHeader from '../Components/NavHeader'
import CircleCard from '../Components/CircleCard'
import SecondFooter from '../Components/SecondFooter'

import media from '../assets/icons/media_icon.svg'

import example1 from '../assets/examples/example1.jpeg'
import example2 from '../assets/examples/example2.png'
import example3 from '../assets/examples/example3.jpeg'
import example4 from '../assets/examples/example4.jpeg'
import example5 from '../assets/examples/example5.jpg'
import example6 from '../assets/examples/example6.jpeg'
import example7 from '../assets/examples/example7.jpeg'
import example8 from '../assets/examples/example8.jpeg'

function Media() {

    const serveType = 'media'
    const itemList = [
        { id:1, title: 'DD', type: 'UIUX', image:example1},
        { id:2, title: 'test1', type: 'UIUX', image:example2 },
        { id:3, title: 'test2-1', type: 'Motion', image:example3 },
        { id:4, title: 'test2-2', type: 'Motion', image:example4 },
        { id:5, title: 'test3-1', type: 'Interaction', image:example5 },
        { id:6, title: 'test3-2', type: 'Interaction', image:example6 },
        { id:7, title: 'test4-1', type: 'Animation', image:example7 },
        { id:8, title: 'test4-2', type: 'Animation', image:example8 },
    ]

    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, [])

    return (
        <div className='page'>
            {isLoading ?
                <MediaLoading /> :
                <div id="media" className='page'>
                    <NavHeader isNav={true} isAbout={false} isBlog={false} />
                    <div className="serveBody flex-col">
                        <img src={media} alt="" id="mediaIcon" />
                        <div className="serveText">MEDIA DESIGN</div>
                        <div className="filter flex">
                            <div className='filterItem' style={{ color: filter === 'all' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('all')}>ALL</div>
                            <div className='filterItem' style={{ color: filter === 'UIUX' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('UIUX')}>UIUX</div>
                            <div className='filterItem' style={{ color: filter === 'Motion' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('Motion')}>Motion</div>
                            <div className='filterItem' style={{ color: filter === 'Interaction' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('Interaction')}>Interaction</div>
                            <div className='filterItem' style={{ marginRight: 0, color: filter === 'Animation' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('Animation')}>Animation</div>
                        </div>
                        <div className='cards'>
                            <div className='flex'>
                                {itemList.filter(item => item.type === filter || filter === 'all').map(filteredItem => (
                                    <CircleCard serveType={serveType} id={filteredItem.id} type={filteredItem.type} title={filteredItem.title} image={filteredItem.image}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <SecondFooter fashion={false} visual={false} media={true}/>
                </div>
            }
        </div>
    )
}

export default Media
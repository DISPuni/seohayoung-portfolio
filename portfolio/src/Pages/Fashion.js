import React, { useState, useEffect } from 'react'

import './Serve.css'

import FashionLoading from '../Loadings/FashionLoading'
import NavHeader from '../Components/NavHeader'
import CircleCard from '../Components/CircleCard'
import SecondFooter from '../Components/SecondFooter'

import fashion from '../assets/icons/fashion_icon.svg'

import example1 from '../assets/examples/example1.jpeg'
import example2 from '../assets/examples/example2.png'
import example3 from '../assets/examples/example3.jpeg'
import example4 from '../assets/examples/example4.jpeg'
import example5 from '../assets/examples/example5.jpg'
import example6 from '../assets/examples/example6.jpeg'

function Fashion() {

    const itemList = [
        { title: 'FREEDOM', type: 'Lookbook', image:example1 },
        { title: 'test1', type: 'Lookbook', image:example2 },
        { title: 'test2-1', type: 'Film', image:example3 },
        { title: 'test2-2', type: 'Film', image:example4 },
        { title: 'test3-1', type: 'Pictorial', image:example5 },
        { title: 'test3-2', type: 'Pictorial', image:example6 },
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
                <FashionLoading /> :
                <div id='fashion' className='page'>
                    <NavHeader isNav={true} isAbout={false} isBlog={false} />
                    <div className='serveBody flex-col'>
                        <img id='fashionIcon' src={fashion} alt="" />
                        <div className='serveText'>Fashion Design</div>
                        <div className='filter flex'>
                            <div className='filterItem' style={{ color: filter === 'all' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('all')}>ALL</div>
                            <div className='filterItem' style={{ color: filter === 'Lookbook' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('Lookbook')}>Lookbook</div>
                            <div className='filterItem' style={{ color: filter === 'Film' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('Film')}>Film</div>
                            <div className='filterItem' style={{ marginRight: 0, color: filter === 'Pictorial' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('Pictorial')}>Pictorial</div>
                        </div>
                        <div className='cards'>
                            <div className='flex'>
                                {itemList.filter(item => item.type === filter || filter === 'all').map(filteredItem => (
                                    <CircleCard type={filteredItem.type} title={filteredItem.title} image={filteredItem.image}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <SecondFooter fashion={true} visual={false} media={false}/>
                </div>}
        </div>
    )
}

export default Fashion
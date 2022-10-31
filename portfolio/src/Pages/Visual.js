import React, { useState, useEffect } from 'react'

import './Serve.css'

import VisualLoading from '../Loadings/VisualLoading'
import NavHeader from '../Components/NavHeader'
import CircleCard from '../Components/CircleCard'
import SecondFooter from '../Components/SecondFooter'

import visual from '../assets/icons/visual_icon.svg'

import example1 from '../assets/examples/example1.jpeg'
import example2 from '../assets/examples/example2.png'
import example3 from '../assets/examples/example3.jpeg'
import example4 from '../assets/examples/example4.jpeg'
import example5 from '../assets/examples/example5.jpg'
import example6 from '../assets/examples/example6.jpeg'

export default function Visual() {

    const itemList = [
        { title: 'PUUNI', type: 'BX', image:example1 },
        { title: 'test1', type: 'BX', image:example2 },
        { title: 'test2-1', type: 'Graphic', image:example3 },
        { title: 'test2-2', type: 'Graphic', image:example4 },
        { title: 'test3-1', type: 'Editorial', image:example5 },
        { title: 'test3-2', type: 'Editorial', image:example6 },
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
                <VisualLoading /> :
                <div id='visual' className='page'>
                    <NavHeader isNav={true} isAbout={false} isBlog={false} />
                    <div className='serveBody flex-col'>
                        <img id='visualIcon' src={visual} alt="" />
                        <div className='serveText'>VISUAL DESIGN</div>
                        <div className="filter flex">
                            <div className='filterItem' style={{ color: filter === 'all' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('all')}>ALL</div>
                            <div className='filterItem' style={{ color: filter === 'BX' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('BX')}>BX</div>
                            <div className='filterItem' style={{ color: filter === 'Graphic' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('Graphic')}>Graphic</div>
                            <div className='filterItem' style={{ marginRight: 0, color: filter === 'Editorial' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('Editorial')}>Editorial</div>
                        </div>
                        <div className='cards'>
                        <div className='flex'>
                            {itemList.filter(item => item.type === filter || filter === 'all').map(filteredItem => (
                                <CircleCard type={filteredItem.type} title={filteredItem.title} image={filteredItem.image}/>
                            ))}
                        </div>
                    </div>
                    </div>
                    <SecondFooter fashion={false} visual={true} media={false}/>
                </div>}
        </div>
    )
}

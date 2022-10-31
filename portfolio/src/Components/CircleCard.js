import React from 'react'

import './CircleCard.css'

function CircleCard(props) {
    return (
        <div id='circleCard'>
            <img id='cardImg' src={props.image} alt="" />
            <div className='circle-overlay'>
                <div className='circle-upper flex'>
                    <div className='circle-text' style={{ marginBottom:'2.7rem', fontWeight:600 }}>{props.type}</div>
                </div>
                <div className='circle-bottom flex'>
                    <div className='circle-text' style={{ marginTop:'2.7rem' }}>{props.title}</div>
                </div>
            </div>
        </div>
    )
}

export default CircleCard
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './CircleCard.css'

function CircleCard(props) {

    let navigate = useNavigate();
    function toServePost(serveType, postId) {
        navigate('/' + serveType + '/' + postId)
    }

    return (
        <div id='circleCard' onClick={() => toServePost(props.serveType, props.id)}>
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
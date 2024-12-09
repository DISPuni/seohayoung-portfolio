import React from 'react'

import './Card.css'

function Card(props) {
    return (
        <div id='card'>
            <img className='image' src={props.image} alt=''/>
            <div className='overlay'>
                <div className='title'>
                    <div className="title-text">{props.title}</div>
                </div>
            </div>
        </div>
    )
}

export default Card
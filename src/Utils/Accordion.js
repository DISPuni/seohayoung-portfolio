import React, { useState } from 'react'
import parse from 'html-react-parser';

import './Accordion.css'

import collapse from '../assets/about/collapse.svg'

function Accordion(props) {

    const [active, setActive] = useState(false)

    return (
        <div className='accordion flex'>
            <div className='accordion-content' style={{ display: active ? 'flex':'none' }}>
                <div className='collapse-year'>
                    {props.years.map((year) => (
                        <div className='collapse-year-text'>{year}</div>
                    ))}
                </div>
                <div className='nodes'>
                    {props.years.map((year, index) => (
                        <div>
                            <div className='circle' />
                            {index < props.years.length - 1 ? <div className='vl' /> : null}
                        </div>
                    ))}
                </div>
                <div className='organization'>
                    {props.organizations.map((organization) => (
                        <div className='organization-text'>{organization}</div>
                    ))}
                </div>
                <div className='description'>
                    {props.descriptions.map((description) => (
                        <div className='description-text'>{parse(description)}</div>
                    ))}
                </div>
            </div>
            <img className='collapse' src={collapse} alt="" onClick={() => setActive(!active)} style={{ transform: active ? null:'scaleY(-1)', marginTop: active ? 'auto':'0', marginBottom: active ? '3.94rem':'auto' }}/>
        </div>
    )
}

export default Accordion
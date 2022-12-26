import React, { useState, useEffect, useRef } from 'react'
import Matter from "matter-js";

import './Serve.css'

import MediaLoading from '../Loadings/MediaLoading'
import NavHeader from '../Components/NavHeader'
import MobileNavHeader from '../Components/MobileNavHeader'
import MobileNav from '../Components/MobileNav'
import CircleCard from '../Components/CircleCard'
import SecondFooter from '../Components/SecondFooter'

import media from '../assets/icons/media_icon.svg'
import pill from '../assets/pills/media_pill.svg'
import arrow from '../assets/arrow.svg'

import pop from '../assets/media/animation_pop/pop_thumbnail.png'
import shimshim from '../assets/media/interaction_shimshim/shimshim_thumbnail.png'
import souvenir from '../assets/media/motion_souvenir/souvenir_thumbnail.png'
import famsupport from '../assets/media/uiux_famsupport/famsupport_thumbnail.png'
import todaywho from '../assets/media/uiux_todaywho/todaywho_thumbnail.png'

function Media() {

    const matterRef = useRef(null);

    const serveType = 'media'
    const itemList = [
        { id: 1, title: 'Pop', type: 'Animation', image: pop },
        { id: 2, title: 'Shimshim', type: 'Interaction', image: shimshim },
        { id: 3, title: 'Souvenir', type: 'Motion', image: souvenir },
        { id: 4, title: 'Famsupport', type: 'UIUX', image: famsupport },
        { id: 5, title: 'Today Who', type: 'UIUX', image: todaywho },
    ]

    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        const reloadCount = sessionStorage.getItem('reloadCount');
        if (reloadCount < 2) {
            sessionStorage.setItem('reloadCount', String(reloadCount + 1));
            window.location.reload(false);
        } else {
            sessionStorage.removeItem('reloadCount');
        }
    }, [])

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);

        var body = document.body,
        html = document.documentElement;

        var height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight) - 190;

        var Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            Bodies = Matter.Bodies;

        var engine = Engine.create()

        var render = Render.create({
            element: matterRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: height,
                wireframes: false,
                background: 'transparent',
                wireframeBackground: 'transparent'
            }
        });

        var topWall = Bodies.rectangle(window.innerWidth / 2 - 50, -50, window.innerWidth - 50, 50, { isStatic: true, render: { fillStyle: "fff" } }),
            bottomWall = Bodies.rectangle(window.innerWidth / 2, height, window.innerWidth, 50, { isStatic: true, render: { fillStyle: "fff" } }),
            leftWall = Bodies.rectangle(window.innerWidth + 50, height / 2, 50, height, { isStatic: true, render: { fillStyle: "fff" } }),
            rightWall = Bodies.rectangle(-50, height / 2, 50, height, { isStatic: true, render: { fillStyle: "fff" } })
            
        const pill1 = Bodies.rectangle(650, 400, 115, 43.5, {
            restitution: 0.5,
            chamfer: 1000,
            render: { sprite: { texture: pill } }
        }),
            pill2 = Bodies.rectangle(600, 400, 115, 43.5, {
                restitution: 0.5,
                chamfer: 1000,
                render: { sprite: { texture: pill } }
            }),
            pill3 = Bodies.rectangle(950, 400, 115, 43.5, {
                restitution: 0.5,
                chamfer: 1000,
                render: { sprite: { texture: pill } }
            }),
            pill4 = Bodies.rectangle(1000, 400, 115, 43.5, {
                restitution: 0.5,
                chamfer: 1000,
                render: { sprite: { texture: pill } }
            }),
            pill5 = Bodies.rectangle(900, 400, 115, 43.5, {
                restitution: 0.5,
                chamfer: 1000,
                render: { sprite: { texture: pill } }
            });

        World.add(engine.world, [topWall, bottomWall, leftWall, rightWall, pill1, pill2, pill3, pill4, pill5]);

        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });
        mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
        mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
        render.mouse = mouse;

        World.add(engine.world, mouseConstraint);
        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: window.innerWidth, y: height }
        });

        Matter.Runner.run(engine);
        Render.run(render);

    }, [])

    return (
        <div className='page'>
            {isLoading ? <MediaLoading /> : null}
            <div id="media" className='page'>
                <NavHeader isNav={true} isAbout={false} isBlog={false} />
                <MobileNavHeader setIsModalOpen={setIsModalOpen} />
                {isModalOpen ? <MobileNav setIsModalOpen={setIsModalOpen} /> : null}
                <div className="serveBody flex-col">
                    <div className='matter' ref={matterRef} />
                    <img src={media} alt="" id="mediaIcon" />
                    <div className="serveText">MEDIA DESIGN</div>
                    <div id='mediaFilter' className="filter flex">
                        <div id='mediaFilterAll' className='filterItem' style={{ color: filter === 'all' ? '#161619' : '#7E7E86', fontWeight: filter === 'all' ? '700' : null }} onClick={() => setFilter('all')}>ALL</div>
                        <div className='filterItem' style={{ color: filter === 'UIUX' ? '#161619' : '#7E7E86', fontWeight: filter === 'UIUX' ? '700' : null }} onClick={() => setFilter('UIUX')}>UIUX</div>
                        <div className='filterItem' style={{ color: filter === 'Motion' ? '#161619' : '#7E7E86', fontWeight: filter === 'Motion' ? '700' : null }} onClick={() => setFilter('Motion')}>Motion</div>
                        <div className='filterItem' style={{ color: filter === 'Interaction' ? '#161619' : '#7E7E86', fontWeight: filter === 'Interaction' ? '700' : null }} onClick={() => setFilter('Interaction')}>Interaction</div>
                        <div className='filterItem' style={{ marginRight: '40px', color: filter === 'Animation' ? '#161619' : '#7E7E86', fontWeight: filter === 'Animation' ? '700' : null }} onClick={() => setFilter('Animation')}>Animation</div>
                    </div>
                    <hr className='filter-hr' />
                    <div className='cards flex'>
                    <div className='cards-empty-space-left' />
                        <img className='cards-arrow' src={arrow} alt="" />
                        <div className='cards-empty-space' />
                        <div className='flex cards-container'>
                            {itemList.filter(item => item.type === filter || filter === 'all').map(filteredItem => (
                                <div className='flex'>
                                    <CircleCard serveType={serveType} id={filteredItem.id} type={filteredItem.type} title={filteredItem.title} image={filteredItem.image} />
                                    <div style={{ width: '5rem' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <SecondFooter fashion={false} visual={false} media={true} />
            </div>
        </div>
    )
}

export default Media
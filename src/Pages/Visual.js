import React, { useState, useEffect, useRef } from 'react'
import Matter from "matter-js";
import { motion } from "framer-motion";

import './Serve.css'

import VisualLoading from '../Loadings/VisualLoading'
import NavHeader from '../Components/NavHeader'
import CircleCard from '../Components/CircleCard'
import SecondFooter from '../Components/SecondFooter'
import MobileNavHeader from '../Components/MobileNavHeader'
import MobileNav from '../Components/MobileNav'

import visual from '../assets/icons/visual_icon.svg'
import pill from '../assets/pills/visual_pill.svg'
import arrow from '../assets/arrow.svg'

import anigom from '../assets/visual/bx_anigom/anigom_thumbnail.jpg'
import camping from '../assets/visual/graphic_camping/camping_thumbnail.jpg'
import jua from '../assets/visual/editorial_jua_poster/jua_poster_thumbnail.jpg'
import pyeonteilbar from '../assets/visual/graphic_pyeonteilbar/pyeonteilba_thumbnail.png'
import www from '../assets/visual/bx_www/www_thumbnail.png'

export default function Visual() {

    const matterRef = useRef(null);

    const serveType = 'visual'
    const itemList = [
        { id: 5, title: 'WWW', type: 'BX', image: www },
        { id: 4, title: 'Pyeonteilbar', type: 'Graphic', image: pyeonteilbar },
        { id: 1, title: 'Anigom', type: 'BX', image: anigom },
        { id: 2, title: 'Camping', type: 'Graphic', image: camping },
        { id: 3, title: 'Jua Poster', type: 'Editorial', image: jua},
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

    const [itemPosition, setItemPosition] = useState(0);
    const [x, setX] = useState(0); //188.5
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);
    function moveItem() {
        if (itemPosition < itemList.length - 1) {
            setItemPosition(itemPosition + 1);
            setX(x - 324);
        } else {
            setItemPosition(0);
            setX(0)
        }

        console.log('x', x)
        console.log('itemPositon', itemPosition)
    }

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

        const pill1 = Bodies.rectangle(650, 400, 90, 45, {
            restitution: 0.5,
            chamfer: 1000,
            render: { sprite: { texture: pill } }
        }),
            pill2 = Bodies.rectangle(600, 400, 90, 45, {
                restitution: 0.5,
                chamfer: 1000,
                render: { sprite: { texture: pill } }
            }),
            pill3 = Bodies.rectangle(950, 400, 90, 45, {
                restitution: 0.5,
                chamfer: 1000,
                render: { sprite: { texture: pill } }
            }),
            pill4 = Bodies.rectangle(1000, 400, 90, 45, {
                restitution: 0.5,
                chamfer: 1000,
                render: { sprite: { texture: pill } }
            }),
            pill5 = Bodies.rectangle(900, 400, 90, 45, {
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
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: window.innerWidth, y: height }
        });

        Matter.Runner.run(engine);
        Render.run(render);
    }, [])

    return (
        <div className='page'>
            {isLoading ? <VisualLoading /> : null}
            <div id='visual' className='page'>
                <NavHeader isNav={true} isAbout={false} isBlog={false} />
                <MobileNavHeader setIsModalOpen={setIsModalOpen} />
                {isModalOpen ? <MobileNav setIsModalOpen={setIsModalOpen} /> : null}
                <div className='serveBody flex-col'>
                    <div className='matter' ref={matterRef} />
                    <img id='visualIcon' src={visual} alt="" />
                    <div className='serveText'>VISUAL DESIGN</div>
                    <div className="filter flex">
                        <div className='filterItem' style={{ color: filter === 'all' ? '#161619' : '#7E7E86', fontWeight: filter === 'all' ? '700' : null }} onClick={() => setFilter('all')}>ALL</div>
                        <div className='filterItem' style={{ color: filter === 'BX' ? '#161619' : '#7E7E86', fontWeight: filter === 'BX' ? '700' : null }} onClick={() => setFilter('BX')}>BX</div>
                        <div className='filterItem' style={{ color: filter === 'Graphic' ? '#161619' : '#7E7E86', fontWeight: filter === 'Graphic' ? '700' : null }} onClick={() => setFilter('Graphic')}>Graphic</div>
                        <div className='filterItem' style={{ marginRight: 0, color: filter === 'Editorial' ? '#161619' : '#7E7E86', fontWeight: filter === 'Editorial' ? '700' : null }} onClick={() => setFilter('Editorial')}>Editorial</div>
                    </div>
                    <hr className='filter-hr' />
                    <div className='cards flex'>
                        <div className='cards-empty-space-left' />
                        <img className='cards-arrow' src={arrow} alt="" onClick={moveItem} />
                        <div className='flex cards-container'>
                            <motion.div
                                className='flex motion-div'
                                animate={{ x, y, rotate }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {itemList.filter(item => item.type === filter || filter === 'all').map(filteredItem => (
                                    <div className='flex'>
                                        <CircleCard serveType={serveType} id={filteredItem.id} type={filteredItem.type} title={filteredItem.title} image={filteredItem.image} />
                                        <div style={{ width: '5rem' }} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
                <SecondFooter fashion={false} visual={true} media={false} />
            </div>
        </div>
    )
}

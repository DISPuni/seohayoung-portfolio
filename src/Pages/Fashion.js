import React, { useState, useEffect, useRef } from 'react';
import Matter from "matter-js";
import { motion } from "framer-motion";

import './Serve.css'

import FashionLoading from '../Loadings/FashionLoading'
import NavHeader from '../Components/NavHeader'
import MobileNavHeader from '../Components/MobileNavHeader'
import MobileNav from '../Components/MobileNav'
import CircleCard from '../Components/CircleCard'
import SecondFooter from '../Components/SecondFooter'

import fashion from '../assets/icons/fashion_icon.svg'
import pill from '../assets/pills/fashion_pill.svg'
import arrow from '../assets/arrow.svg'

import quench from '../assets/fashion/lookbook_quench/quench_thumbnail.png'
import Q from '../assets/fashion/film_Q/Q_thumbnail.png'
import freedom from '../assets/fashion/pictorial_freedom/freedom_thumbnail.png'
// import example4 from '../assets/examples/example4.jpeg'
// import example5 from '../assets/examples/example5.jpg'

function Fashion() {

    const matterRef = useRef(null);

    const serveType = 'fashion'
    const itemList = [
        // { id: 5, title: 'test3-1', type: 'Pictorial', image: example5 },
        // { id: 4, title: 'test2-2', type: 'Film', image: example4 },
        { id: 3, title: 'FREEDOM', type: 'Pictorial', image: freedom },
        { id: 2, title: '[?]', type: 'Film', image: Q },
        { id: 1, title: 'Quench', type: 'Lookbook', image: quench },
    ]

    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState('all');

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
        })
        setTimeout(() => {
            setIsLoading(false);
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

        const pill1 = Bodies.circle(900, 400, 29, {
            restitution: 0.5,
            render: { sprite: { texture: pill } }
        }),
            pill2 = Bodies.circle(600, 400, 29, {
                restitution: 0.5,
                chamfer: 1000,
                render: { sprite: { texture: pill } }
            }),
            pill3 = Bodies.circle(700, 400, 29, {
                restitution: 0.5,
                render: { sprite: { texture: pill } }
            }),
            pill4 = Bodies.circle(800, 400, 29, {
                restitution: 0.5,
                render: { sprite: { texture: pill } }
            }),
            pill5 = Bodies.circle(1000, 400, 29, {
                restitution: 0.5,
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
            {isLoading ? <FashionLoading /> : null}
            <div id='fashion' className='page'>
                <NavHeader isNav={true} isAbout={false} isBlog={false} />
                <MobileNavHeader setIsModalOpen={setIsModalOpen} />
                {isModalOpen ? <MobileNav setIsModalOpen={setIsModalOpen} /> : null}
                <div className='serveBody flex-col'>
                    <div className='matter' ref={matterRef} />
                    <img id='fashionIcon' src={fashion} alt="" />
                    <div className='serveText'>Fashion Design</div>
                    <div className='filter flex'>
                        <div className='filterItem' style={{ color: filter === 'all' ? '#161619' : '#7E7E86', fontWeight: filter === 'all' ? '700' : null }} onClick={() => setFilter('all')}>ALL</div>
                        <div className='filterItem' style={{ color: filter === 'Lookbook' ? '#161619' : '#7E7E86', fontWeight: filter === 'Lookbook' ? '700' : null }} onClick={() => setFilter('Lookbook')}>Lookbook</div>
                        <div className='filterItem' style={{ color: filter === 'Film' ? '#161619' : '#7E7E86', fontWeight: filter === 'Film' ? '700' : null }} onClick={() => setFilter('Film')}>Film</div>
                        <div className='filterItem' style={{ marginRight: 0, color: filter === 'Pictorial' ? '#161619' : '#7E7E86', fontWeight: filter === 'Pictorial' ? '700' : null }} onClick={() => setFilter('Pictorial')}>Pictorial</div>
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
                                {itemList.filter(item => item.type === filter || filter === 'all').map((filteredItem) => (
                                    <div className='flex'>
                                        <CircleCard serveType={serveType} id={filteredItem.id} type={filteredItem.type} title={filteredItem.title} image={filteredItem.image} />
                                        <div style={{ width: '5rem' }} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
                <SecondFooter fashion={true} visual={false} media={false} />
            </div>
        </div>
    )
}

export default Fashion
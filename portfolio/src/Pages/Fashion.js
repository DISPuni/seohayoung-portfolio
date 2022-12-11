import React, { useState, useEffect, useRef } from 'react';
import Matter from "matter-js";
import { useDraggable } from 'react-use-draggable-scroll';

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

import example1 from '../assets/examples/example1.jpeg'
import example2 from '../assets/examples/example2.png'
import example3 from '../assets/examples/example3.jpeg'
import example4 from '../assets/examples/example4.jpeg'
import example5 from '../assets/examples/example5.jpg'
import example6 from '../assets/examples/example6.jpeg'

function Fashion() {

    const matterRef = useRef(null);
    const scrollRef = useRef();
    const { events } = useDraggable(scrollRef);

    const serveType = 'fashion'
    const itemList = [
        { id: 1, title: 'FREEDOM', type: 'Lookbook', image: example1 },
        { id: 2, title: 'test1', type: 'Lookbook', image: example2 },
        { id: 3, title: 'test2-1', type: 'Film', image: example3 },
        { id: 4, title: 'test2-2', type: 'Film', image: example4 },
        { id: 4, title: 'test3-1', type: 'Pictorial', image: example5 },
        { id: 5, title: 'test3-2', type: 'Pictorial', image: example6 },
    ]

    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState('all');

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
                            <img className='cards-arrow' src={arrow} alt="" />
                            <div className='flex cards-container' {...events} ref={scrollRef}>
                                {itemList.filter(item => item.type === filter || filter === 'all').map((filteredItem) => (
                                    <CircleCard serveType={serveType} id={filteredItem.id} type={filteredItem.type} title={filteredItem.title} image={filteredItem.image} />
                                ))}
                            </div>
                            <div className='cards-empty-space-right' />
                        </div>
                    </div>
                    <SecondFooter fashion={true} visual={false} media={false} />
                </div>
        </div>
    )
}

export default Fashion
import React, { useState, useEffect, useRef } from 'react'
import Matter from "matter-js";
import { useDraggable } from 'react-use-draggable-scroll';

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

import example1 from '../assets/examples/example1.jpeg'
import example2 from '../assets/examples/example2.png'
import example3 from '../assets/examples/example3.jpeg'
import example4 from '../assets/examples/example4.jpeg'
import example5 from '../assets/examples/example5.jpg'
import example6 from '../assets/examples/example6.jpeg'

export default function Visual() {

    const matterRef = useRef(null);
    const scrollRef = useRef();
    const { events } = useDraggable(scrollRef);

    const serveType = 'visual'
    const itemList = [
        { id: 1, title: 'PUUNI', type: 'BX', image: example1 },
        { id: 2, title: 'test1', type: 'BX', image: example2 },
        { id: 3, title: 'test2-1', type: 'Graphic', image: example3 },
        { id: 4, title: 'test2-2', type: 'Graphic', image: example4 },
        { id: 5, title: 'test3-1', type: 'Editorial', image: example5 },
        { id: 6, title: 'test3-2', type: 'Editorial', image: example6 },
    ]

    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filter, setFilter] = useState('all')

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
            html.clientHeight, html.scrollHeight, html.offsetHeight);

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
                        <img className='cards-arrow' src={arrow} alt="" />
                        <div className='cards-empty-space-left' />
                        <div className='flex cards-container' {...events} ref={scrollRef}>
                            {itemList.filter(item => item.type === filter || filter === 'all').map(filteredItem => (
                                <CircleCard serveType={serveType} id={filteredItem.id} type={filteredItem.type} title={filteredItem.title} image={filteredItem.image} />
                            ))}
                        </div>
                        <div className='cards-empty-space-right' />
                    </div>
                </div>
                <SecondFooter fashion={false} visual={true} media={false} />
            </div>
        </div>
    )
}

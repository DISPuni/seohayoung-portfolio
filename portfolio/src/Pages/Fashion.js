import React, { useState, useEffect, useRef } from 'react';
import Matter from "matter-js";

import './Serve.css'
import './Pills.css'

import FashionLoading from '../Loadings/FashionLoading'
import NavHeader from '../Components/NavHeader'
import CircleCard from '../Components/CircleCard'
import SecondFooter from '../Components/SecondFooter'

import fashion from '../assets/icons/fashion_icon.svg'
import pill from '../assets/main/main_img_pill.svg'

import example1 from '../assets/examples/example1.jpeg'
import example2 from '../assets/examples/example2.png'
import example3 from '../assets/examples/example3.jpeg'
import example4 from '../assets/examples/example4.jpeg'
import example5 from '../assets/examples/example5.jpg'
import example6 from '../assets/examples/example6.jpeg'

function Fashion() {

    const matterRef = useRef(null);
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies;
    const [matterWidth, setMatterWidth] = useState(1680);
    const [matterHeight, setMatterHeight] = useState(1290);

    const serveType = 'fashion'
    const itemList = [
        { id: 1, title: 'FREEDOM', type: 'Lookbook', image: example1 },
        { id: 2, title: 'test1', type: 'Lookbook', image: example2 },
        { id: 3, title: 'test2-1', type: 'Film', image: example3 },
        { id: 4, title: 'test2-2', type: 'Film', image: example4 },
        { id: 4, title: 'test3-1', type: 'Pictorial', image: example5 },
        { id: 5, title: 'test3-2', type: 'Pictorial', image: example6 },
    ]

    // const [isLoading, setIsLoading] = useState(true)
    const [isLoading, setIsLoading] = useState(false);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        // setTimeout(() => {
        //     setIsLoading(false)
        // }, 1500);
        
        var engine = Engine.create(),
            world = engine.world;

        var render = Render.create({
            element: matterRef.current,
            engine: engine,
            options: {
                width: matterWidth,
                height: matterHeight,
                // showAngleIndicator: false,
                wireframes: false,
                background: 'transparent',
                wireframeBackground: 'transparent'
            }
        });
        Render.run(render);

        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

        world.bodies = [];

        const offset = 100;

        // these static walls will not be rendered in this sprites example, see options
        Composite.add(world, [
            // Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 10, {render: {
            //     // isStatic: true,
            //     fillStyle: 'transparent',
            //     strokeStyle: 'transparent',
            //     lineWidth: 1
            // }}),

            Bodies.rectangle(matterWidth/2 - 50, -50, matterWidth - 50, 50, { isStatic: true }),
            Bodies.rectangle(matterWidth/2, matterHeight, matterWidth, 50, { isStatic: true, render: { fillStyle: "fff" } }),
            Bodies.rectangle(matterWidth + 50, matterHeight/2, 50, matterHeight, { isStatic: true }),
            Bodies.rectangle(-50, matterHeight/2, 50, matterHeight, { isStatic: true })
        ]);

        var pill1 = Bodies.circle(0, 0, 33, {
            restitution: 0.5,
            render: { sprite: { texture: pill } }
        }, 0);
        var pill2 = Bodies.circle(0, 0, 33, {
            restitution: 0.5,
            render: { sprite: { texture: pill } }
        });
        var pill3 = Bodies.circle(0, 0, 33, {
            restitution: 0.5,
            render: { sprite: { texture: pill } }
        });
        var pill4 = Bodies.circle(0, 0, 33, {
            restitution: 0.5,
            render: { sprite: { texture: pill } }
        });
        var pill5 = Bodies.circle(0, 0, 33, {
            restitution: 0.5,
            render: { sprite: { texture: pill } }
        });

        Composite.add(world, [pill1, pill2, pill3, pill4, pill5])

        // add mouse control
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

        Composite.add(world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: matterWidth, y: matterHeight }
        });

        // return {
        //     engine: engine,
        //     runner: runner,
        //     render: render,
        //     canvas: render.canvas,
        //     stop: function () {
        //         Matter.Render.stop(render);
        //         Matter.Runner.stop(runner);
        //     }
        // };
        // engine: engine,
        // //     runner: runner,
        // //     render: render,
        // //     canvas: render.canvas,
        Matter.Render.run(render);
        Matter.Runner.run(engine)
    }, [])

    return (
        <div className='page'>
            {isLoading ?
                <FashionLoading /> :
                <div id='fashion' className='page'>
                    <NavHeader isNav={true} isAbout={false} isBlog={false} />
                    <div className='serveBody flex-col'>
                        <div className='matter' ref={matterRef}/>
                        <img id='fashionIcon' src={fashion} alt="" />
                        <div className='serveText'>Fashion Design</div>
                        <div className='filter flex'>
                            <div className='filterItem' style={{ color: filter === 'all' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('all')}>ALL</div>
                            <div className='filterItem' style={{ color: filter === 'Lookbook' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('Lookbook')}>Lookbook</div>
                            <div className='filterItem' style={{ color: filter === 'Film' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('Film')}>Film</div>
                            <div className='filterItem' style={{ marginRight: 0, color: filter === 'Pictorial' ? '#161619' : '#7E7E86' }} onClick={() => setFilter('Pictorial')}>Pictorial</div>
                        </div>
                        <div className='cards'>
                            <div className='flex'>
                                {itemList.filter(item => item.type === filter || filter === 'all').map((filteredItem) => (
                                    <CircleCard serveType={serveType} id={filteredItem.id} type={filteredItem.type} title={filteredItem.title} image={filteredItem.image} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <SecondFooter fashion={true} visual={false} media={false} />
                </div>}
        </div>
    )
}

export default Fashion
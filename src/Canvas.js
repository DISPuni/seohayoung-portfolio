import React, { useEffect, useRef } from 'react';
import Matter from "matter-js";
import Two from 'two.js';

import pill from './assets/pills/fashion_pill.svg';

function Canvas() {

  const matterRef = useRef();

  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Body = Matter.Body,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    var engine = Engine.create(),
      world = engine.world;

    // create renderer
    var render = Render.create({
      element: matterRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
        wireframeBackground: 'transparent'
    }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    var topWall = Bodies.rectangle(window.innerWidth / 2 - 50, -50, window.innerWidth - 50, 50, { isStatic: true, render: { fillStyle: "fff" } }),
      bottomWall = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 186, window.innerWidth, 50, { isStatic: true, render: { fillStyle: "fff" } }),
      leftWall = Bodies.rectangle(window.innerWidth + 50, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true, render: { fillStyle: "fff" } }),
      rightWall = Bodies.rectangle(-50, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true, render: { fillStyle: "fff" } })
    const pill1 = Bodies.circle(200, 400, 29, {
      restitution: 0.5,
      render: { sprite: { texture: pill } }
    }),
      pill2 = Bodies.circle(100, 400, 29, {
        restitution: 0.5,
        render: { sprite: { texture: pill } }
      }),
      pill3 = Bodies.circle(300, 400, 29, {
        restitution: 0.5,
        render: { sprite: { texture: pill } }
      }),
      pill4 = Bodies.circle(50, 400, 29, {
        restitution: 0.5,
        render: { sprite: { texture: pill } }
      }),
      pill5 = Bodies.circle(150, 400, 29, {
        restitution: 0.5,
        render: { sprite: { texture: pill } }
      }),
      pill6 = Bodies.circle(150, 400, 29, {
        restitution: 0.5,
        render: { sprite: { texture: pill } }
      }),
      pill7 = Bodies.circle(150, 400, 29, {
        restitution: 0.5,
        render: { sprite: { texture: pill } }
      }),
      pill8 = Bodies.circle(150, 400, 29, {
        restitution: 0.5,
        render: { sprite: { texture: pill } }
      });

    Composite.add(world, [pill1, pill2, pill3, pill4, pill5]);
    Composite.add(world, [
      Bodies.rectangle(window.innerWidth/2, 0, window.innerWidth, 50, { isStatic: true }),
      Bodies.rectangle(window.innerWidth/2, window.innerHeight, window.innerWidth, 50, { isStatic: true }),
      Bodies.rectangle(window.innerWidth, window.innerHeight/2, 50, window.innerHeight, { isStatic: true }),
      Bodies.rectangle(0, window.innerHeight/2, 50, window.innerHeight, { isStatic: true })
    ]);

    var counter = 0,
        scaleFactor = 1.01;

    Events.on(runner, 'afterTick', function(event) {
        counter += 1;

        if (counter === 40)
            Body.setStatic(pill1, true);

        if (scaleFactor > 1) {
            Body.scale(pill2, scaleFactor, scaleFactor);
            Body.scale(pill3, 0.995, 0.995);

            // modify pill4 vertices
            pill4.vertices[0].x -= 0.2;
            pill4.vertices[0].y -= 0.2;
            pill4.vertices[1].x += 0.2;
            pill4.vertices[1].y -= 0.2;
            Body.setVertices(pill4, pill4.vertices);
        }

        // make pill5 move up and down
        // body is static so must manually update velocity for friction to work
        var py = 300 + 100 * Math.sin(engine.timing.timestamp * 0.002);
        Body.setVelocity(pill5, { x: 0, y: py - pill5.position.y });
        Body.setPosition(pill5, { x: 100, y: py });

        // make pill3 body move up and down and rotate constantly
        Body.setVelocity(pill3, { x: 0, y: py - pill3.position.y });
        Body.setAngularVelocity(pill3, 0.02);
        Body.setPosition(pill3, { x: 600, y: py });
        Body.rotate(pill3, 0.02);

        // every 1.5 sec
        if (counter >= 60 * 1.5) {
            Body.setVelocity(pill6, { x: 0, y: -10 });
            Body.setAngle(pill7, -Math.PI * 0.26);
            Body.setAngularVelocity(pill8, 0.2);

            // reset counter
            counter = 0;
            scaleFactor = 1;
        }
    });

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

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: window.innerWidth, y: window.innerHeight }
    });

    // context for MatterTools.Demo
    return {
      engine: engine,
      runner: runner,
      render: render,
      canvas: render.canvas,
      stop: function () {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
      }
    };

  }, [])



  return (
    <div className='canvas' ref={matterRef} />
  )
}

export default Canvas
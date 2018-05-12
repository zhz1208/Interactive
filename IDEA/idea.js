
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

// Code borrowed from the Matter.js Ball Poll demo 
function ballDrop() {
    var x = Common.random(centerX-400, centerX+400);

    var color = Common.choose(['#FF5C60', '#FFBB73','#FCF582','#C2FA92','#6EC7FC','#BB7FF3']);

    var circle = Bodies.circle(x, 20, Common.random(15, 30), { restitution: 0.6, friction: 0.1, render: { fillStyle: color, strokeStyle: 'transparent' } } );

    World.add(world, [
        circle,
    ]);
};

// document ready
$(function() {

    //idea
    var k = 0;
    $("#k").click(function(){ 
        if (k == 0) {
            // center the text
            $("#idea").html("Ideas");
            $("#idea").css("font-size", "280px");
            $("#idea").css("color", "#01E4C0");
            $("#idea").css("right", "50%");
            $("#idea").css("bottom", "50%");
            $("#idea").css("transform", "translate(50%, 50%)");
            k = 1;
        } else if (k == 1) {
            ballDrop();
        }

    });

    // Physics is fun
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;

    // create engine
    engine = Engine.create();
    world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: windowWidth,
            height: windowHeight,
            showAngleIndicator: false,
            wireframes: false,
            background: '#FFFFFF',
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    World.add(world, [
        Bodies.rectangle(400, 600, 2400, 50.5, { isStatic: true, render: { visible: false } }),

        Bodies.rectangle(centerX-330, centerY, 50, 220, { isStatic: true, render: { visible: false } }),
        Bodies.rectangle(centerX-215, centerY+27, 140, 170, { isStatic: true, render: { visible: false } }),
        Bodies.rectangle(centerX-135, centerY, 50, 230, { isStatic: true, render: { visible: false } }),
        Bodies.rectangle(centerX-10, centerY+27, 160, 170, { isStatic: true, render: { visible: false } }),
        Bodies.rectangle(centerX+147, centerY+27, 145, 170, { isStatic: true, render: { visible: false } }),
        Bodies.rectangle(centerX+300, centerY+27, 145, 170, { isStatic: true, render: { visible: false } }),

    ]);

});

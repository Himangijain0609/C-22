const Engine = Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;

var ground, ball;
var engine , world;


function setup() {
  createCanvas(400,400);

engine = Engine.create();
//myworld is  myengine's world
world=engine.world;

var o={

  isStatic: true
}

ground = Bodies.rectangle(200,390,400,20,o);
World.add(world,ground);

var options={
  restitution: 1.0
}

ball = Bodies.circle(110,90,20,options);
World.add(world,ball);

box = Bodies.rectangle(200,200,50,50,options);
World.add(world,box);
  
}

function draw() {
  background("pink");  
  Engine.update(engine);
rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  rect(box.position.x,box.position.y,50,50);
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,20);
}
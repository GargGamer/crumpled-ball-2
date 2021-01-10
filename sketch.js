const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ground
var bin1, binImage
var paperball, ball

function preload(){
  
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,height,1000,20);
  bin1 = new bin(800,630,150,130)
  paperball = new paper(100,630,30,30)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperball.body,paperball.body.position,{x:1,y:-1.9})
  }

  ground.display()
  bin1.display()
  paperball.display()
 
}


  




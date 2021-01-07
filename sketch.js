const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ground
var bin1, bin2, bin3
var paperball, ball

function preload(){
	ball = loadImage("sprites/paper.png");
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,height,1000,20);

  bin1 = new bin(740,630,30,130)
	bin2 = new bin(800,660,150,30)
	bin3 = new bin(860,630,30,130)

  paperball = new paper(100,630,30,30)

 // paperball.addImage("sprites/paper.png")

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
  bin2.display()
  bin3.display()
  paperball.display()
 
}


  




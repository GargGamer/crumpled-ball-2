const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ground
var bin1, bin2, bin3, bin4,bin5, binImage
var paperball, ball

function preload(){
  binImage = loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,height,1000,20);
  bin4 = createSprite(800,630,150,130)
  bin4.addImage(binImage)
  bin4.scale = 0.4
  bin5 = new bin(800,630,150,130)
  paperball = new paper(100,630,30,30)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("red");

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperball.body,paperball.body.position,{x:1,y:-1.9})
  }

  ground.display()
  bin4.display()
  paperball.display()
  drawSprites()
 
}


  




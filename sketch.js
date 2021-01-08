
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree,treee,treeImg,mango1,boi,boiIMG,stone,rope;

function preload()
{
	treeImg=loadImage("tree.png");
	boiIMG=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	treee=createSprite(500,400,200,200);
	treee.addImage(treeImg);
	treee.scale=0.6;

	boi=createSprite(100,500,100,300)
	boi.addImage(boiIMG);
	boi.scale=0.1;

	//Create the Bodies Here.

	stone=new Ston(300,600,30,30);
	mango1=new Mango(300,40,300);
	ground=new Ground(300,700,1000,100);
    rope=new TreeConstrain(stone.body,300,600);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 
  drawSprites();
  ground.display();
  mango1.display();
  stone.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    stone.fly();
}


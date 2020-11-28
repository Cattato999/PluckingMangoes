
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1000,590);
	ground = new Ground(650, 600);
	stone = new Stone(235,420,30);
	
	mango1 = new Mango(1100,300,30);

	Engine.run(engine);
  console.log(stone);
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	tree.display();
	ground.display();
	image(boy,200,370,200,300);
	stone.display();
	mango1.display();

  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1,side2,side3;
var ground1;
var paper1;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = new Dustbin(400,650,200,20);
	side2 = new Dustbin(300,610,20,100);
	side3 = new Dustbin(500,610,20,100);
	ground1 = new Ground(400,690,800,10);
	paper1 = new Paper(190,380,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  side1.display();
  side2.display();
  side3.display();
  ground1.display();
  paper1.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}


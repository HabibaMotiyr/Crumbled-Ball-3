
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var engine,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,600,10);
	ground = new Ground(400,680,800,20);
	leftSide = new Dustbin (550,620,20,100);
	rightSide = new Dustbin (670,620,20,100);
	bottom = new Dustbin (610,660,100,20);

	Slingshot= new Slingshot(paper.body,{x:100,y:100});



	Engine.run(engine);
  
}	


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  leftSide.display();
  rightSide.display();
  bottom.display();

  Slingshot.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y=-15})
	}

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x: mouseX, y:mouseY})
}

function mouseReleased(){
    Slingshot.fly()
}




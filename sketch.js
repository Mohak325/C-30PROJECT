
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,tree,mango1,
mango2,mango3,boyImage,ground,stone,string,treeImage

function preload(){
	boyImage = loadImage("sprites/boy.png");
	treeImage = loadImage("sprites/tree.png")
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(400,690);
	stone = new Stone(70,575)
	string = new String(stone.body,{x:50,y:575});
	mango1 = new Mango(650,430);
	mango2 = new Mango(700,410);
	mango3 = new Mango(540,470);

	Engine.run(engine);
  
}


function draw() {
	background(225);
	imageMode(CENTER);
  image(boyImage,100,635,150,200);
  image(treeImage,630,500,250,400);
 
	rectMode(CENTER);
	ground.display();
	stone.display();
	string.display();
	mango1.display();	
	mango2.display();
	mango3.display();
	
detectcollision(stone,mango1);
detectcollision(stone,mango2);
detectcollision(stone,mango3);


	
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	string.fly();
}
function detectcollision(lstone,lmango){
    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.r + lstone.r){
        Matter.Body.setStatic(lmango.body,false);
    }
}



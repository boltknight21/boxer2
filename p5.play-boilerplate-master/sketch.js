const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot; 
var score=0;
//var box
//var box1,box2,box3,box4,box5;
var gameState = "onSling";




function setup() {
  createCanvas(1200,400);
 //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,height,1200,20);
  box1 = new Box(800,420,70,70);
  box2 = new Box(920,420,70,70);
  log1 = new Log(810,260,300,PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  
  log2 =  new Log(810,180,300,PI/2); 

  box5 = new Box(810,160,70,70);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);

  bird = new Bird(200,50);
  slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw() {
  background("white"); 
  //textSize(50);
  //text("score:"+score,900,100); 
  Engine.update(engine);
    //strokeWeight(4);

    box1.display();
    box2.display();
    ground.display();
   
    log1.display();

    box3.display();
    box4.display();
 
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
    slingshot.display();   
  drawSprites();
}
function mouseDragged(){
  // if(gamestate!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   //}
}


function mouseReleased(){
   slingshot.fly();
   gamestate="launched";
}

function keyPressed(){
   if(keyCode === 32){
       bird.path=[];
       Matter.Body.setPosition(bird.body,{x:200, y:50})
    slingshot.attach(bird.body);
   }
}    
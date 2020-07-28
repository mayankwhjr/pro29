const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,ground,bird

function setup() {
  createCanvas(800,600);
  createSprite(400, 200, 50, 50);
  ground= new Ground(400,590,800,20)
  ground2= new Ground(450,490,150,20)
  ground3= new Ground(650,300,150,20)
  //level1
  box1=new Box(440,480,30,40)
  box2=new Box(470,480,30,40)
  box3=new Box(500,480,30,40)
  box4=new Box(530,480,30,40)
  box5=new Box(560,480,30,40)
  //level2
  box6=new Box(480,520,30,40)  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);  
  drawSprites();
ground.display()
ground2.display()
ground3.display();
box1.display();
box2.display()
box3.display()
box4.display()
box5.display()
}
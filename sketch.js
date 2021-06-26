const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9 , box10 , box11 , box12 , box13;
var box14 , box15 , box16 , box17 , box18 , box19 ,  box20 , box21 , box22 , box23 , box24 , box25 , box26;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  box1 = new box(600,100,70,70);
  box2 = new box(900,100,70,70);
  box3 = new box(900,100,70,70);
  box4 = new box(900,100,70,70);
  box5 = new box(900,100,70,70);
  box6 = new box(600,100,70,70);
  box7 = new box(600,100,70,70);
  box8 = new box(600,100,70,70);
  box9 = new box(900,100,70,70);
  box10 = new box(900,100,70,70);
  box11 = new box(600,100,70,70);
  box12 = new box(600,100,70,70);
  box13 = new box(700,100,70,70);
  box14 = new box(700,100,70,70);
  box15 = new box(700,100,70,70);
  box16 = new box(700,100,70,70);
  box17 = new box(700,100,70,70);
  box18 = new box(700,100,70,70);
  box19 = new box(800,100,70,70);
  box20 = new box(800,100,70,70);
  box21 = new box(800,100,70,70);
  box22 = new box(800,100,70,70);
  box23 = new box(800,100,70,70);
  box24 = new box(800,100,70,70);
  box25 = new box(600,100,70,70);
  box26 = new box(900,100,70,70);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body , {x: mouseX , y:mouseY})
}










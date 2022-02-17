var a,b,c,d;
var stiv;
var esqueleto;
var stivImg;
var pastoImg;
var esqueletoImg;
var maderaImg

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var bloqueBody,bloqueSprite,ground;

function preload(){
stivImg=loadImage("Stiv.jpg");
pastoImg=loadImage("Pasto.jpg");
esqueletoImg=loadImage("Esqueleto.jpg");
maderaImg=loadImage("Madera.png");
}
function setup(){
createCanvas (600,600);
a = createSprite(-150,10,20,200);
b = createSprite(120,80,20,450);
c = createSprite(150,200,400,20);
d = createSprite(100,-80,500,20);

rectMode(CENTER);
engine=Engine.create();
world=engine.world;


//a.addImage(maderaImg,20,200);
//a=image(maderaImg,-150,10,20,200)
//b.addImage(maderaImg);
//c.addImage(maderaImg);
//d.addImage(maderaImg);



//declara un sprite para tu personaje

stiv = createSprite(100,100,10,10);
stiv.addImage(stivImg);
stiv.scale=0.2;

esqueleto = createSprite(200,100,10,10);
esqueleto.addImage(esqueletoImg);
esqueleto.scale=0.1;

bloqueSprite=createSprite(stiv.x,stiv.y,10,10);
bloqueSprite.addImage(maderaImg);
bloqueSprite.scale=0.2;
bloqueBody=Bodies.circle(stiv.x,stiv.y,5,{restitution:0.4,isStatic:true});
World.add(world,bloqueBody);

Engine.run(engine);

}

function draw(){
background(pastoImg);
if(keyDown("d")){
  stiv.x+=2;
}
if(keyDown("w")){
  stiv.y-=2;
}
if(keyDown("s")){
  stiv.y+=2;
}
if(keyDown("a")){
  stiv.x-=2;
}
camera.position.x=stiv.x;
camera.position.y=stiv.y;
drawSprites();

}
var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody,opt,options;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.05;

	engine = Engine.create();
	world = engine.world;
	
	starBody = Bodies.circle(650 , 30 , 10,{isStatic:true,restitution:0.5} );
	World.add(world, starBody);
	
	Engine.run(engine);
	
	
}


function draw() {
  background(bgImg);

  star.x=starBody.position.x;
  star.y=starBody.position.y;

  if(keyDown("DOWN_ARROW"))
  {
	Matter.Body.setStatic(starBody,false);
  }

   
  if(keyDown("RIGHT_ARROW"))
  {
	  fairy.velocityX=+2;
  }
 
  if(keyDown("LEFT_ARROW"))
  {
	  fairy.velocityX=-2;
  }
 
  if(keyWentUp(LEFT_ARROW)||keyWentUp(RIGHT_ARROW))
  {
	  fairy.velocityX=0;
  }
  
 

  Engine.update(engine);
  drawSprites();

}


	


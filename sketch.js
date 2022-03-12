var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, z1img,z2img,z3img
var zombieGroup;
var heart1img, heart2img,heart3img;
var heart1,heart2,heart3
var bullet,bulletimg
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");

  bgImg = loadImage("assets/bg.jpeg");
  z1img=loadImage("assets/Z1.png");
  z2img=loadImage("assets/Z2.png");
  z3img=loadImage("assets/Z3.png");

  heart1img=loadImage("assets/heart_1.png");
  heart2img=loadImage("assets/heart_2.png");
  heart3img=loadImage("assets/heart_3.png");

bulletimg=loadImage("assets/Bullet.png")
}

function setup() {


  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
  // player.debug = true
   player.setCollider("rectangle",0,0,300,300);
   zombieGroup=new Group();

   heart1=createSprite(displayWidth-150,40,20,20)
   heart1.addImage("heart1",heart1img)
   heart1.scale=0.4;
   heart1.visible=false

   heart2=createSprite(displayWidth-100,40,20,20)
   heart2.addImage("heart2",heart2img)
   heart2.scale=0.4
   heart2.visible=false

   heart3=createSprite(displayWidth-150,40,20,20)
   heart3.addImage("heart3",heart3img)
   heart3.scale=0.4
   
   


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 bullet=createSprite(displayWidth-1150,player.y-30,20,10);
 bullet.addImage("bullet",bulletimg)
bullet.velocityX=20
bullet.scale=0.1
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(zombieGroup.isTouching(player))
{
  for(var i=0;i<zombieGroup.length;i++)
  {
if(zombieGroup[i].isTouching(player))
    {
          zombieGroup[i].destroy();
      }   
  }
}


enemy();

drawSprites();

}



function enemy(){

  if(frameCount % 50 ==0)
  {
       zombie=createSprite(random(500,1100),random(100,500),40,40);
       var rand = Math.round(random(1,3));
        //zombie.addImage(z1img);
        if(rand==1)
           {

           zombie.addImage(z1img);
            zombie.scale=0.5
        }
        if(rand==2)
        {
          zombie.scale=0.2
      
            zombie.addImage(z2img);
        }
        if(rand==3)
        {

          zombie.scale=0.3
          zombie.addImage(z3img);
        }
          
           
           
            zombie.velocityX=-3;

            zombie.lifetime=250;
            zombieGroup.add(zombie)

            
            
            


  }

}


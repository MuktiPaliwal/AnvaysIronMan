var lifeThanos,lifeIronMan
var Laser,laser, laserGroup
var box1
var backGroundImage,BACKGROUND
var thanosImage,thanos
var ironMan,ironManLeft,ironManRight,ironManFly
var characterButtonImage,characterButton
var trainingButtonImage,trainingButton
var commentBoxImage1,commentBoxImage2,commentBoxImage3,commentBoxImage4,commentBoxImage5,comment1,comment2,comment3,comment4,comment5;
function preload(){
  backGroundImage=loadImage("images/background Image.jpg")
  thanosImage=loadImage("images/thanos side.png")
  ironManFly=loadImage("images/IR Fly.png")
  ironManLeft=loadImage("images/IR FL.png")
  ironManRight=loadImage("images/IR FR.png")
  commentBoxImage1=loadImage("images/commentBox1.png")
  commentBoxImage2=loadImage("images/commentBox2.png")
  characterButtonImage=loadImage("images/characterButton.png")
  trainingButtonImage=loadImage("images/training.png")
  laser=loadImage("images/laser 2.png")

}
function setup() {
  createCanvas(displayWidth, displayHeight);
  thanos=createSprite(230,550 )
  thanos.addImage("thanosImage",thanosImage);
  thanos.scale=0.5
  thanos.depth=3

  ironMan=createSprite(1300,570);
  ironMan.addImage("IMI",ironManLeft)
  ironMan.scale=0.5
  ironMan.depth=3

  comment1=createSprite(310,350);
  comment1.addImage("comment1",commentBoxImage1);
  comment1.lifetime=540
  comment1.scale=0.4 
  
  comment2=createSprite(1200,400);
  comment2.addImage("comment2",commentBoxImage2);
  comment2.lifetime=740
  comment2.scale=0.4 
  comment2.visible=false;

  characterButton=createSprite(1450,50);
  characterButton.addImage("characterButton",characterButtonImage);
  characterButton.scale=0.4
  characterButton.depth=3

  trainingButton=createSprite(1250,50);
  trainingButton.addImage("trainingButton",trainingButtonImage);
  trainingButton.scale=0.4
  trainingButton.depth=3

  box1=createSprite(770,430,1400,850);
  box1.addImage("box1",backGroundImage)
  box1.depth=2
  box1.visible=false

  BACKGROUND=createSprite(displayWidth/2,displayHeight/2)
  BACKGROUND.addImage("q",backGroundImage)
  BACKGROUND.depth=0

  lifeThanos=createSprite(thanos.x,thanos.y-170,100,20)
  lifeThanos.shapeColor="red";

  
  lifeIronMan=createSprite(ironMan.x,ironMan.y-170,100,20)
  lifeIronMan.shapeColor="green";
  console.log(ironMan.y)

  laserGroup = new Group();

  Laser=createSprite(ironMan.x-150,ironMan.y-70)
  Laser.addImage("laser",laser)
  Laser.visible=false
  Laser.scale=0.2
  
  laserGroup.add(Laser);
}

function draw() {
  
  background(1,1,1,1);
 
console.log(thanos.width+ "," +thanos.height)


  

  if(mousePressedOver(characterButton)){
    
  }
 /* if(keyDown("LEFT_ARROW") && ironMan.y<570){
    ironMan.velocityX=-1
    
  }
  if(keyDown("RIGHT_ARROW") && ironMan.y<570){
    ironMan.velocityX=1
        
  }
*/
if(laserGroup.collide(thanos)){
  if(lifeThanos.width >4){
    lifeThanos.width=lifeThanos.width-5
  }else {
    lifeThanos.width = 0.1;
  }
  laserGroup.setLifetimeEach(3);
  console.log(lifeThanos.width)
       }
  if(keyDown("UP_ARROW")){
    ironMan.addImage("IMI",ironManFly)
    ironMan.velocityY=-1
    lifeIronMan.velocityY=-1
  }
  if(keyDown("LEFT_ARROW")){
  //  ironMan.addImage("IMI",ironManLeft)
    ironMan.velocityX=-1
    lifeIronMan.velocityX=-1

  }
  if(keyDown("RIGHT_ARROW")){
    // ironMan.addImage("IMI",ironManRight)
     ironMan.velocityX=1
     lifeIronMan.velocityX=1
     
   }
   if(keyDown("RIGHT_ARROW")){
    // ironMan.addImage("IMI",ironManRight)
     ironMan.velocityX=1
     lifeIronMan.velocityX=1
     
   }
   if(keyDown("DOWN_ARROW")){
    // ironMan.addImage("IMI",ironManRight)
     ironMan.velocityY=1
     lifeIronMan.velocityY=1
     
   }

   if(keyDown("space")){
laserGroup.setVisibleEach(true);
laserGroup.setVelocityXEach(-7)
ironMan.addImage("IMI",ironManLeft)
Laser=createSprite(ironMan.x-150,ironMan.y-70)
  Laser.addImage("laser",laser)
  Laser.visible=false
  Laser.scale=0.2
  
  laserGroup.add(Laser);
   }
     if(ironMan.y>440 && ironMan.y<450){
      ironMan.velocityX=0
      ironMan.velocityY=0
      ironMan.addImage("IMI",ironManLeft)
     }

     
  if(comment1.lifetime===1){
    comment2.visible=true;
  }
  if(mousePressedOver(trainingButton) && comment2.lifetime<2 ){
    box1.visible=true
    text("press up arrow key to make Iron Man fly",200,300)
    text("press down arrow key to make Iron Man come to ground after flying",250,300)
    text("press left arrow key to move Iron Man left",300,300)
    text("press right arrow key to move Iron Man right",350,300)
  }
  if(mousePressedOver(trainingButton) && box1.visible===true){

  }
 drawSprites()
 
}
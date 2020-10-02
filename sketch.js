
var monkey , monkey_running,stop
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage,obstacleGroup;
var FoodGroup;
var score,ground;
var survivalTime=0;
var gameState="play";
var score=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  stop=loadImage("sprite_0.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
;
 monkey = createSprite(50,300,20,50)
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;

  
  ground=createSprite(300,338,1200,20)
  ground.velocityX=-3;
  ground.x=ground.width/2;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background("lightBlue");
   textSize(15)
   stroke("green")
   text("Survival Time:"+"  "+survivalTime,450,50);
   textSize(15)
   stroke("black")
   text("Score:"+" "+score,100,50);
  monkey.collide(ground)
  if(gameState==="play"){
     ban();
  obs()
if(ground.x<0){
  ground.x=ground.width/2;
}

 if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -12; 
    }
  monkey.velocityY=monkey.velocityY+0.8
  

  survivalTime=Math.ceil(frameCount/frameRate());
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score=score+1;
  }
    if(monkey.isTouching(obstacleGroup)){
      gameState="end";
      
    
  }
  }
 if(gameState==="end"){
    bananaGroup.setVelocityXEach(0);
  obstacleGroup.setVelocityXEach(0);
   ground.velocityX=0;
   textSize(30)
   stroke("red")
   text("Game Over!!",200,200)
 }
  
  drawSprites();
}
function ban(){
 if(frameCount % 80===0){
   banana=createSprite(600,200,10,10);
   banana.y=Math.round(random(120,200));
  banana.addImage(bananaImage);
   banana.scale=0.1
  banana.velocityX=-3
  banana.lifetime=-1;
 bananaGroup.add(banana); 
  
}

}
function obs(){
  if(frameCount % 300===0){
  obstacle=createSprite(600,311,10,10);
 
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1
 obstacle.velocityX=-2;
    obstacle.lifetime=-1;
obstacleGroup.add(obstacle);
  
  
  
  
  
  
}

}



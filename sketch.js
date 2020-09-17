
var movingRect, fixedRect
gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
 movingRect= createSprite(400, 200, 80, 50);
 fixedRect=createSprite(400, 200, 30, 50);
 gameObject1=createSprite(100, 200, 50, 50);
 gameObject2=createSprite(150, 200, 30, 50);
 gameObject3=createSprite(200, 200, 30, 50);
 gameObject4=createSprite(250, 200, 30, 50);
}

function draw() {
  background(255,255,255); 
  
  bounceOff(movingRect, gameObject4);

  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="red";
    gameObject2.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    gameObject2.shapeColor="green";
  }
  
  drawSprites();
}




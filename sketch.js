var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 100, 50, 50);
  movingRect.shapeColor = "pink";
  fixedRect = createSprite(100,100,50,20);
  fixedRect.shapeColor = "yellow";
  movingRect.velocityX =  -4;
  fixedRect.velocityX = 4;
}

function draw() {
  background(155,255,255);
    
//  movingRect.x = mouseX;
 // movingRect.y = mouseY;
 /* if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.shapeColor = "orange";
fixedRect.shapeColor = "orange";

  }
  else{
  movingRect.shapeColor = "pink";
 fixedRect.shapeColor = "yellow";
  }*/
  //algorithm bounceOff
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
    {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
      
    }
   /* if( fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){

  }
  else{
  movingRect.shapeColor = "pink";
 fixedRect.shapeColor = "yellow";
  }*/

  drawSprites();
}
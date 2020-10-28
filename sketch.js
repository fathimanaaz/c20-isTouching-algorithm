var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,600);
  fixedRect = createSprite(350, 300, 50, 80);
  movingRect = createSprite(500,200,80,50);

  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"

  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background("black");  

  movingRect.y=mouseY;
  movingRect.x=mouseX;

  if(movingRect.x-fixedRect.x <=fixedRect.width/2 + movingRect.width/2
    && fixedRect.x-movingRect.x <=fixedRect.width/2 + movingRect.width/2
    && movingRect.y-fixedRect.y <=fixedRect.height/2 + movingRect.height/2
    && fixedRect.y-movingRect.y <=fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
  }
  else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
  }

  drawSprites();
}
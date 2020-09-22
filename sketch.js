var sq,movesq;


function setup() {
  createCanvas(800,400);
  sq=createSprite(400,200,50,50);
  movesq=createSprite(300,200,50,50);

  sq.shapeColor="green";
  movesq.shapeColor="green";

  sq.debug=true;
  movesq.debug=true;
}

function draw() {
  background(255,255,255); 
  text("sq-"+sq.x+","+sq.y,200,200);
  text("movesq-"+movesq.x+","+movesq.y,200,300);
  movesq.x=World.mouseX;
  movesq.y=World.mouseY;
 
  if(sq.x-movesq.x<sq.width/2+movesq.width/2
    && movesq.x-sq.x<sq.width/2+movesq.width/2
    &&sq.y-movesq.y<sq.height/2+movesq.height/2
    &&movesq.y-sq.y<sq.height/2+movesq.height/2){
      sq.shapeColor="red";
      movesq.shapeColor="red";
    }
    else {
      sq.shapeColor="green";
      movesq.shapeColor="green";
    }

  drawSprites();
}
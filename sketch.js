var ball,bat;

function setup() {
  createCanvas(800,400);
  bat=createSprite(400, 200, 50, 50);
  bat.shapeColor = "blue";

  ball=createSprite(200,400,20,20);
  ball.shapeColor = "blue";

}

function draw() {
  background("red");  

  ball.x = mouseX;
  ball.y = mouseY;

  if(ball.x-bat.x<ball.width/2+bat.width/2&&bat.x-ball.x<ball.width/2+bat.width/2
    && ball.y - bat.y < ball.height/2 + bat.height/2 && bat.y - ball.y <ball.height/2+bat.height/2){
    ball.shapeColor = "green";
    bat .shapeColor = "green";
  }
  else{
    ball.shapeColor = "blue";
    bat.shapeColor = "blue";
  }
  drawSprites();
}
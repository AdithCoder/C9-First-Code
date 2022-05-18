var box;

function setup() {
  createCanvas(800,600);
box = createSprite(400,400,50,50);
box.shapeColor="red";

}

function draw() 
{
  background(0);

if(keyDown("up")){
  box.y-=3;
}
if(keyDown("down")){
  box.y+=3;
}
if(keyDown("left")){
  box.x-=3;
}
if(keyDown("right")){
  box.x+=3;
}
if(keyDown("space")){
background("turquoise");
}

drawSprites();
}







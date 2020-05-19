
var fixedrect
var movingrect

function setup() {

  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(100,100,50,60)
  fixedrect.debug = true
  movingrect.debug = true
  movingrect.shapeColor = "Green"
  fixedrect.shapeColor = "Green"
  
  
}

function draw() {
  background("black");  
movingrect.x = mouseX
movingrect.y = mouseY

if(fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 
  && movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 
  && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2 
  && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2){
  movingrect.shapeColor = "Red"
  fixedrect.shapeColor = "Red"
}
else{
  movingrect.shapeColor = "Green"
  fixedrect.shapeColor = "Green"
}


  drawSprites();

}
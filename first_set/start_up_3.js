var rCol = 0;
var gCol = 0
var my_width = 640;
var my_height = 480;

function setup() {
  createCanvas(my_width, my_height);

}

function draw() {
  background(rCol,gCol,0)
  fill(255,100,80);
  noStroke();
  var xMap=map(mouseX, 0,my_width, 0,255);
  var yMap=map(mouseY, 0,my_width, 0,255);
  console.log(xMap);
  rCol=xMap;
  gCol=yMap
  ellipse(mouseX, mouseY, 20,20 );

}

function mousePressed(){

}

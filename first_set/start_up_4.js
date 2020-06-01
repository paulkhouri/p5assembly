
var my_width = 640;
var my_height = 480;
let x = 320;
let y = 240;
let extraCanvas;

function setup() {
  createCanvas(my_width, my_height);
  extraCanvas = createGraphics(my_width, my_height);
  extraCanvas.clear();
  background(0);

}



function draw() {
  background(0);
  x+=random(-5,5);
  y+=random(-5,5);
  rectMode(CENTER);
  fill(255);
  noStroke();
  rect(x,y,50,50);

  if(mouseIsPressed){
    console.log("hello");
    extraCanvas.fill(255,0,0,150);
    extraCanvas.noStroke();
    extraCanvas.circle(mouseX, mouseY, 20);
  }

  image(extraCanvas,0,0);




}

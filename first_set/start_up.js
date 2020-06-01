function setup() {
  createCanvas(800, 600);
  background(255,200,50);
  console.log("barry");
}

var i = 0
var k = 0

var x_1 = 0;
var y_1 = 0;
var x_2 = 0;
var y_2 = 0;
function draw() {
  clear();
background(255,200,50);

//-----
var x = 800;
var y = 600;

if(k%1 == 0){

noStroke();
for(var j=0; j<1; j++){
  fill(255,255,255,255*Math.random());
  translate(0+x*Math.random(), 0+y*Math.random());
  rotate(PI*Math.random());
  ellipse(0,0, 5+400*Math.random(),5+400*Math.random());
  resetMatrix()
}

}
k+=1

//---- line placed on mouse pressed
stroke(0,255,255);
strokeWeight(10);
line(x_1,y_1,x_2,y_2);
//-----
fill(255,255,255,200);
stroke(255,0,255);
strokeWeight(2);
rect(0,400,100,200);
//-----
noFill();
i += 0.025;
arc(50+10*i, 50, 80, 80, 0, Math.PI*(i%2), PIE);

}

var goOne = true
function mousePressed(){
  if(goOne){
    x_1 = mouseX;
    y_1 = mouseY;
    goOne = false;

  }else{
    x_2 = mouseX;
    y_2 = mouseY;
    goOne = true;

  }



}

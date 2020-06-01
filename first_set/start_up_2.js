var myCircle = {
  x : 0,
  y : 200,
  diameter : 50
};
var person = {
  x : 0,
  y : 200,
  age     : 50,
  eyeColor  : "blue"
};

var r = 20;
var g = 100;
var b = 255;



function setup() {
  createCanvas(800, 600);
  console.log(person)
  console.log(myCircle)


}


function draw() {
    background(255,200,50);
    fill(r,g,b);
    ellipse(myCircle.x, myCircle.y, myCircle.diameter,myCircle.diameter);
    myCircle.x += 1;




}


function mousePressed(){




}

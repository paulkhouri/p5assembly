

var x = 0;
var y = 0;
var rectW = 80;
var rectH = 80;
var picW = 640;
var picH = 480;

var maze = [
            [1,1,1,0,1,0,1,0],
            [0,0,1,0,1,0,1,0],
            [0,0,1,0,1,0,1,0],
            [0,0,1,0,1,0,1,0],
            [0,0,1,0,1,0,1,0],
            [0,0,1,0,1,0,1,0]
          ]


let character;
function preload() {
  character = loadImage('images/gamecharacter.png');
}

function setup() {
  createCanvas(picW, picH);
}



let value = 0;
function draw() {
  background(255,100,0);
  for( var k = 0; k<maze.length ; k++){

    for(var h=0; h< maze[k].length; h++){

    fill(0);
    if( maze[k][h] == 0){

    rect(h*rectW, k*rectH, rectW, rectH);
  }
}



  }

  stroke(255,255,255, 100);
  strokeWeight(10)
for(var i =0; i<picW; i+=rectW){
  line(i, 0, i, picH);
}
for(var j =0; j<picH; j+=rectH){
  line(0, j, picW, j);
}
  //fill(value);
  //strokeJoin(ROUND);
  //strokeWeight(5)
  //stroke(200,100,15);
  //rect(x, y, rectW, rectH);
  image(character, x, y, rectW, rectH);

  if(y >= picH- rectH){
    y = picH - rectH
  }
  if(y< 0){
    y = 0;
  }
  if(x >= picW - rectW){
    x = picW - rectW
  }
  if(x < 0){
    x = 0;
  }



}




function keyPressed() {
  manageDown()
  if (keyCode === LEFT_ARROW) {
    value = 255;

  } else if (keyCode === RIGHT_ARROW) {
    value = 0;

  }
}

function manageDown(){
  if(keyIsDown(LEFT_ARROW)){

    x -= rectW;
  }
  if(keyIsDown(RIGHT_ARROW)){

    x += rectW;

  }
  if(keyIsDown(DOWN_ARROW)){

    y += rectH;
  }
  if(keyIsDown(UP_ARROW)){

    y -= rectH;

  }
}

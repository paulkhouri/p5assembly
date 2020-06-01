

var x = 0;
var y = 0;
var rectW = 50;
var rectH = 50;
var picW = 800;
var picH = 600;

var maze = [
            [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
            [0,0,1,0,1,0,1,0, 1,1,1,0,1,0,1,0],
            [0,0,1,1,1,0,1,0, 1,1,1,0,1,0,1,0],
            [1,1,1,0,1,1,1,1, 1,1,1,0,1,0,1,0],
            [1,0,1,0,1,0,1,1, 1,1,1,0,1,0,1,0],
            [1,1,1,0,1,0,1,0, 1,1,1,0,1,0,1,0],
            [1,1,1,0,1,0,1,0, 1,1,1,0,1,0,1,0],
            [0,0,1,0,1,0,1,0, 1,1,1,0,1,0,1,0],
            [0,0,1,1,1,0,1,0, 1,1,1,0,1,0,1,0],
            [1,1,1,0,1,1,1,1, 1,1,1,0,1,0,1,0],
            [1,0,1,0,1,0,1,1, 1,1,1,0,1,0,1,0],
            [1,1,1,0,1,0,1,0, 1,1,1,0,1,0,1,0]
          ]


let character;
let backer;
let grass;
function preload() {
  character = loadImage('images/gamecharacter.png');
  backer = loadImage('images/tile_test.png');
  grass = loadImage('images/grass_tile.png');
}

function setup() {
  createCanvas(picW, picH);
}



let value = 0;
function draw() {
  background(255,100,0);
  for( var k = 0; k < maze.length ; k++){

    for(var h=0; h < maze[k].length; h++){

    fill(0);
    if( maze[k][h] == 0){

      fill(100,200,100);
      noStroke();
      rect(h*rectW, k*rectH, rectW, rectH);
//image(grass, h*rectW, k*rectH, rectW, rectH);

      }
    else{
      fill(255,100,80);
      noStroke();
      rect(h*rectW, k*rectH, rectW, rectH);
      //image(backer, h*rectW, k*rectH, rectW, rectH);

    }
    }
  }
/*
  stroke(255,255,255, 100);
  strokeWeight(10)
for(var i =0; i<picW; i+=rectW){
  line(i, 0, i, picH);
}
for(var j =0; j<picH; j+=rectH){
  line(0, j, picW, j);
}
*/
  //fill(value);
  //strokeJoin(ROUND);
  //strokeWeight(5)
  //stroke(200,100,15);
  //rect(x, y, rectW, rectH);
  image(character, x*rectW, y*rectH, rectW,rectH);

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

if(x-1 >= 0 && maze[y][x-1] == 0){
    x -= 1;
  }

  }
  if(keyIsDown(RIGHT_ARROW)){

    if(x+1 < maze[y].length && maze[y][x+1] == 0){
        x += 1;
      }

  }
  if(keyIsDown(DOWN_ARROW)){

    if(y+1 < maze.length && maze[y+1][x] == 0){
        y += 1;
      }
  }
  if(keyIsDown(UP_ARROW)){

    if(y-1 >= 0 && maze[y-1][x] ==0){
        y -= 1;
      }

  }
}

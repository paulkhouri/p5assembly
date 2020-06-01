let my_duck;
let my_missile;
let my_bg;
let my_launcher
function preload(){
  my_duck=loadImage("duck_pic.png");
  my_missile=loadImage("rocket.png");
  my_bg=loadImage("bg.png");
  my_launcher=loadImage("cloud.png");
}


class Missile{
  constructor(){
  this.x = 400;
  this.y = 420;
  this.y_start = this.y;
  this.w = 20;
  this.h = 90;
  this.s = 10;
  this.fire = false;
    
  }
  
  move(){
    
  if(keyIsDown(32)){
    this.fire = true;
  }// end of first if 
  
  if(this.fire == true){
  this.y = this. y - this.s;
    if(this.y < -this.h){
    this.y=this.y_start
      this.fire=false;
    }
    }else{
    this.x = launcher_obj.x+launcher_obj.w/2-this.w/2;
    this.y = launcher_obj.y -0.75*this.h
  
  }// end of second if
    
  }// end of move
  
  show(){
    fill(200,67,0);
    image(my_missile, this.x,this.y,this.w,this.h)
  }
  
}// end of object


// creating an object
class Launcher {
  constructor() {
    // gives coordinates and the size
    this.x = 400;
    this.y = 400;
    this.w = 150;
    this.h = 75;
  }// this curly brace ends the constructor
  
// this is the move function
  move(){
    // check if left arrow key down
    //if it is change x coordinate by -5 (left)
    if ( keyIsDown(LEFT_ARROW) && this.x>=0  ) {
       this.x = this.x - 5;
    }
    
    if(keyIsDown(RIGHT_ARROW)  && this.x+ this.w < width ){
      this.x = this.x + 5; 
    }

  }// ends the move function
 // gives info for the rectangle to appear 
  show() {
    fill(200, 88, 100);
    noStroke();
    image(my_launcher, this.x,this.y,this.w,this.h)
  }
}// this curly brace closes off the whole object

class Duck{
  constructor(){
    this.x = 100;
    this.y = 30;
    this.w = 100;
    this.h = 100;
    this.s = -3;
  } // end of characteristics
  
  move(){
    // check if if box goes over the end
    if( this.x < -this.w){
    // send back to start
    this.x=width;
    } // end of move
    
  this.x = this.x + this.s;
  }
  
  show(){
  fill(200,68, 131);
  
  //rect(this.x, this.y, this.w, this.h)
  image(my_duck,this.x, this.y, this.w, this.h)
  } // end of show
  
}// end of duck object


function setup() {
  createCanvas(700, 500);
 
  launcher_obj = new Launcher();
   missile_obj= new Missile();
  duck_obj = new Duck();
  
}

function draw() {
  background(220);

  image(my_bg, 0, 0, width, height);
  fill(0,0,0,100)
  rect(0,0, width, 130);
 

  launcher_obj.move();
  duck_obj.move();
  missile_obj.move();
  
  duck_obj.show();
  missile_obj.show();
  launcher_obj.show();
 
}
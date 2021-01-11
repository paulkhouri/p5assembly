
class Ball{
    constructor(x,y,rad,dx,dy,t,l,r,b){
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.mouseDown = false;
        this.drag = false;
        this.mX;
        this.mY;
        this.dx = dx;
        this.dy = dy;
        this.left = false;
        this.up = false;
        this.t = t;
        this.l = l;
        this.r = r;
        this.b = b;
    }


    update(){
        //this.dx = random(-1,1);
        //this.dy = random(-1,1);
        
        
  
        if(this.x >= width - this.r-this.rad){ 
           this.dx = -this.dx;
        }
        if(this.x <=0 +this.l+this.rad){
            this.dx = -this.dx;
        }
        
      
        if(this.y >= height - this.b - this.rad){ 
           this.dy = -this.dy;
        }
        if(this.y <=0 +this.rad+this.t ){
            this.dy = -this.dy;
        }
        
        this.x +=this.dx;
        this.y +=this.dy;
        
        if(mouseIsPressed && this.getDistance()){
            this.dx=0;
            this.dy=0;
            
        }
      

this.display();
    }

    display(){
        strokeWeight(1);
        stroke(0,100,200);
        //noStroke();
        fill('rgba(0,255,0, 0.25)');
        circle(this.x, this.y,this.rad*2 );



    }

    setMouse(mX, mY){
        this.mX = mX;
        this.mY = mY;

    }

    getDistance(){
        var dx = mouseX - this.x;
        var dy = mouseY - this.y;
        var d = Math.sqrt( Math.pow(dx, 2) + Math.pow(dy,2));
        if(d <= this.rad){
            return true
        }else{
            return false
        }
        

    }




}





let objectList = []
let t,l,r,b

function setup() {
    createCanvas(700, 500);
    t=40; l=40; r=40; b=40;
    for(var i=0; i<100; i++){
        objectList.push(new Ball(width/2, height/2,10, random(-3,3),random(-3,3),t,l,r,b))
    }
       
 
    
  }


  function draw(){
        background(220);
        strokeWeight(0);
        stroke(0,100,200);
        fill(200,200,100);
        rect(l, t, width-r-l, height-b-t);

      
      for(var i=0; i < objectList.length; i++){
          objectList[i].update();
      }
       
  }

function mousePressed() {
        console.log("mouse pressed");
    
}


function mouseReleased() {
        console.log("mouse released");
}
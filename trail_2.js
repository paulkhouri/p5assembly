class Leader{
    constructor(x,y, onCol, Rad){
        this.x = x;
        this.y = y;
        this.Col = color(onCol, onCol, onCol, 100)
        this.Rad = Rad; 
        this.dx = 0;
        this.dy = 0;
   
    }
    
    update(){
        this.dx = mouseX - this.x;
        this.dy = mouseY - this.y;
        let lineLength = 50;
        let d = this.distanceMeasure(this.dx, this.dy);
        stroke(255,255,255);
        strokeWeight(1);
        line(this.x, this.y, this.x+lineLength*this.dx/d, this.y+lineLength*this.dy/d);
        
        this.x = mouseX;
        this.y = mouseY;
        this.draw();
        
  
        
    }
    
    draw(){
        
        strokeWeight(1);
        stroke(255,255,255);
        //noStroke();
        fill(this.Col);
        circle(this.x, this.y,this.Rad*2 );
        
    }
    
    getX(){
        return this.x;
    }
    
    getY(){
        return this.y;
    }
    
  getdx(){
        return this.dx
    }
    
    getdy(){
        return this.dy
    }
    
    distanceMeasure(dx, dy){
        return Math.sqrt(Math.pow(dx, 2)+Math.pow(dy,2))
        
    }

    

     
}
//---------------------

class Follower{
    constructor(x,y, onCol, Rad){
        this.x = x;
        this.y = y;
        this.Col = color(onCol, onCol, onCol, 50)
        this.Rad = Rad; 
        this.dx = 0;
        this.dy = 0;
        this.leaderX = width/10;
        this.leaderY = height/10;
        this.t=0;
        this.rate =10;
        this.ang = 0;
        this.prop = 0.5;
        
   
    }
    
    update(){
        
        
        this.dx = this.leaderX - this.x;
        this.dy = this.leaderY - this.y;
        this.ang = Math.atan2(this.dy, this.dx);
        //console.log(this.ang*180/Math.PI);
        
        if(this.distanceMeasure(this.dx, this.dy)>this.Rad*this.prop){
        this.x += this.dx/this.rate;
        this.y += this.dy/this.rate;
        }
 
        this.draw();
        
        
        
  
        
    }
    
    draw(){

        // circle
        strokeWeight(1);
        stroke(255,255,255);
        noStroke();
        fill(this.Col);
        circle(this.x, this.y,this.Rad*2 );
        // connecting line
        stroke(255,255,255);
        strokeWeight(1);
        line(this.x, this.y, this.leaderX, this.leaderY);
        // coordinates
       
        translate(this.x, this.y);
        noFill();
        //arc(0, 0, 80, 80, 0, this.ang);
        rotate(this.ang)
        
      
        
        line(0-20, 0, 0+20, 0);
        line(0, 0-20, 0, 0+20);
        fill(255,255,0, 150);
        noStroke();
        beginShape();
vertex(0, this.Rad);
vertex(0, -this.Rad);
vertex(this.Rad, 0);

endShape(CLOSE);
        
        
        resetMatrix();
        
        
    }
    
    getX(){
        return this.x;
    }
    
    getY(){
        return this.y;
    }
    

    setLeaderX(x){
        this.leaderX = x;
        
        
    }
    setLeaderY(y){
        this.leaderY = y;
        
    }
    
    distanceMeasure(dx, dy){
        return Math.sqrt(Math.pow(dx, 2)+Math.pow(dy,2))
        
    }
    setProp(p){
         this.prop = p;
        
    }
    

     
}


let objectList = []
let xStart= 100
let lightsNum=40
let lightDist = 16
let lightSize = 10
let count = 0
let rad =40
let myLeader;


function setup() {
    createCanvas(700, 500);
  
    
    for(var i=0 ; i< lightsNum; i++){
        objectList.push(new Follower(0,0, 200, rad*(1-i/lightsNum)))
    }

    

    
   
   
  
       
 
    
  }

 function draw(){
        background(0);
         stroke(255,255,255);
    strokeWeight(1);
     line(0, height/2, width, height/2);
     line(width/2, 0, width/2, height);
    

     for(var i=0  ; i < lightsNum ; i++){
         if(i == 0){
         objectList[i].setLeaderX(mouseX);
         objectList[i].setLeaderY(mouseY);
        objectList[i].setProp(0.7);
         }else{
             objectList[i].setLeaderX(objectList[i-1].getX())
             objectList[i].setLeaderY(objectList[i-1].getY())
             
             
         }
         
         objectList[lightsNum-1-i].update();
     }
     

       
  }
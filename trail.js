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
        this.Col = color(onCol, onCol, onCol, 100)
        this.Rad = Rad; 
        this.dx = 0;
        this.dy = 0;
        this.leaderX = width/10;
        this.leaderY = height/10;
        this.t=0;
        this.rate =6;
        
   
    }
    
    update(){
        
        
        this.dx = this.leaderX - this.x;
        this.dy = this.leaderY - this.y;
        
        if(this.distanceMeasure(this.dx, this.dy)>2*this.Rad){
        this.x += this.dx/this.rate;
        this.y += this.dy/this.rate;
        }
 
        this.draw();
        
        
        
  
        
    }
    
    draw(){
        stroke(255,255,255);
        strokeWeight(1);
        line(this.x, this.y, this.leaderX, this.leaderY);
        
        strokeWeight(1);
        stroke(255,255,255);
        noStroke();
        fill(this.Col);
        circle(this.x, this.y,this.Rad*2 );
        
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
    

     
}


let objectList = []
let xStart= 100
let lightsNum=20
let lightDist = 16
let lightSize = 10
let count = 0
let myLeader;


function setup() {
    createCanvas(700, 500);
    myLeader = new Leader(width/2,height/2, 255, 10);
    
    for(var i=0 ; i< lightsNum; i++){
        objectList.push(new Follower(0,0, 255, 10*(1-i/lightsNum)))
    }

    

    
   
   
  
       
 
    
  }

 function draw(){
        background(0);
         stroke(255,255,255);
    strokeWeight(1);
     line(0, height/2, width, height/2);
     line(width/2, 0, width/2, height);
     //myLeader.update();

     for(var i=0  ; i < lightsNum ; i++){
         if(i == 0){
         objectList[i].setLeaderX(mouseX)
         objectList[i].setLeaderY(mouseY)
         }else{
             objectList[i].setLeaderX(objectList[i-1].getX())
             objectList[i].setLeaderY(objectList[i-1].getY())
             
             
         }
         
         objectList[i].update();
     }
     

       
  }
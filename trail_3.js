
//---------------------

class Follower{
    constructor(x,y, r,g,b, Rad, num){
        this.x = x;
        this.y = y;
        this.Col = color(r, g, b, 100)
        this.Rad = Rad; 
        this.dx = 0;
        this.dy = 0;
        this.leaderX = this.x;
        this.leaderY = this.y;
        this.t=0;
        this.rate =3;
        this.ang = 0;
        this.prop = 1;
        this.dragging = false;
        this.mynumber = num;
        
    }
    
    update(){
        
        let dist = this.distanceMeasure(mouseX - this.x, mouseY - this.y);
        if(dist < this.Rad  && mouseIsPressed && Follower.drag == null){
            
      
            this.dragging = true;
            Follower.drag = this;
          
           
        }
        if(!mouseIsPressed){
            Follower.drag = null;
            this.dragging = false;
        }
        
        if(this.dragging && Follower.drag == this){
            console.log(this.mynumber)
  Follower.num = this.mynumber;
            this.leaderX = mouseX;
            this.leaderY = mouseY;
            
        }
        
        this.dx = this.leaderX - this.x;
        this.dy = this.leaderY - this.y;
       
   
        
        if(this.distanceMeasure(this.dx, this.dy)>this.Rad*this.prop){
        this.x += this.dx/this.rate;
        this.y += this.dy/this.rate;
        }
            
       
         this.ang = Math.atan2(this.dy, this.dx);
 
 
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
   if(!this.dragging && x!=null){
        this.leaderX = x;
        }
        
        
    }
    setLeaderY(y){
       if(!this.dragging && y!= null){
        this.leaderY = y;
        }
        
    }
    
    distanceMeasure(dx, dy){
        return Math.sqrt(Math.pow(dx, 2)+Math.pow(dy,2))
        
    }
    setProp(p){
         this.prop = p;
        
    }
        
}
Follower.drag = null;
Follower.num = null;



let objectList = []
let xStart= 100
let lightsNum=50
let lightDist = 16
let lightSize = 10
let count = 0
let rad =10
let myLeader = 0;


function setup() {
    createCanvas(700, 500);
  
    
    for(var i=0 ; i< lightsNum; i++){
        objectList.push(new Follower(width/2 - i*3*rad,height/2, 200 ,0,0, rad, i))
    }
    Follower.num = myLeader;

    

    
   
   
  
       
 
    
  }

 function draw(){
        background(0);
        stroke(255,255,255);
        strokeWeight(1);
        line(0, height/2, width, height/2);
        line(width/2, 0, width/2, height);
     myLeader = Follower.num
    

     for(var i=0  ; i < lightsNum ; i++){
         if(i == myLeader){
         objectList[i].setLeaderX(null);
         objectList[i].setLeaderY(null);
        objectList[i].setProp(0.7);
         }else if(i<myLeader){
             objectList[i].setLeaderX(objectList[i+1].getX())
             objectList[i].setLeaderY(objectList[i+1].getY())
              objectList[i].setProp(2);
                
         }
        else{
            objectList[i].setLeaderX(objectList[i-1].getX())
             objectList[i].setLeaderY(objectList[i-1].getY())
             objectList[i].setProp(2);
            
        } 
         
         objectList[lightsNum-1-i].update();
     }
     

       
  }
class Light{
    constructor(x,y, onCol, Rad){
        this.x = x;
        this.y = y;
        this.onCol = onCol;
        this.Col = onCol
        this.Rad = Rad; 
        this.hit = false;
    }
    
    update(){
        
        this.draw();
        if(this.hit){
            this.Col -=20;
        }
        if(this.Col <0){
            this.hit = false;
        }
        
    }
    
    draw(){
        
        strokeWeight(1);
        stroke(255,255,255);
        //noStroke();
        fill(this.Col);
        circle(this.x, this.y,this.Rad*2 );
        
    }
    
    hitme(){
        if(this.hit == false){
        this.hit = true;
        this.Col = this.onCol;
        }
    }
     
}


let objectList = []
let xStart= 100
let lightsNum=40
let lightDist = 16
let lightSize = 10
let count = 0


function setup() {
    createCanvas(700, 500);

    
    xStart = width/2 - (lightDist/2)*(lightsNum-1);
   
    for(var i=0; i<lightsNum; i++){
        objectList.push(new Light(xStart + lightDist*i, height/2, 255, 8))
    }
       
 
    
  }

 function draw(){
        background(0);
         stroke(255,255,255);
    strokeWeight(1);
     line(0, height/2, width, height/2);
     line(width/2, 0, width/2, height);
     

      for(var i=0; i < objectList.length; i++){
          objectList[i].update();
      }
     objectList[count%lightsNum].hitme();
     count+=1
       
  }
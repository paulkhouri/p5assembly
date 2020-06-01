console.log("test")

class Walker{

    constructor(){
        this.x = width/2;
        this.y = height/2;

    }

    display(){
       stroke(0);
       point(this.x, this.y)
    }

    circleDisplay(){
        let c = color(0, 0, 0, 10); 
        //noStroke();
        noFill();
        stroke(c); 
        circle(this.x, this.y , 30)
    }

    step(){
        let choice = 1+Math.floor(random(4));
        console.log(choice);
        if (choice==1){
            this.x ++;

        }else if ( choice ==2){
            this.x --;

        }else if (choice == 3){
            this.y ++;

        }else{
            this.y --;

        }
    }

    betterStep(){
        let stepX= Math.floor(random(3))-1;
        let stepY= Math.floor(random(3))-1;
        this.x += 3*stepX;
        this.y += 3*stepY;
    }


}

let w;
function setup() {
    createCanvas(700, 500);
    background(220);
    w = new Walker();
  }


  function draw() {
      w.circleDisplay();
      w.betterStep();
    
  }
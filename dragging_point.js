
class DragPoint{
    constructor(m){
        this.xC = 350;
        this.yC = 250;
        this.w = 200;
        this.h = 200;
        this.x = 350;
        this.y = 250;
        this.r = 40/2;
        this.manager = m;
        this.mouseDown = false;
        this.drag = false;
    }


    update(){
        this.display();
        this.setMouse();
        if(this.drag){
        if(Math.abs(this.xC - mouseX) <= this.w/2){
            this.x = mouseX;
            //this.y = mouseY;
        }
        if(Math.abs(this.yC - mouseY) <= this.h/2){
            this.y = mouseY;
            //this.y = mouseY;
        }
        if(Math.abs(this.xC - this.x)> this.w/2){
            console.log("out")
        }

        }
        console.log(this.drag);

    }

    display(){
        strokeWeight(3);
        stroke(50)
        line(this.xC-this.w/2, this.yC , this.xC+this.w/2, this.yC);
        line(this.xC, this.yC+this.h/2 , this.xC, this.yC-this.h/2);
        if(!this.mouseDown){
            fill(200, 88, 100);
        }else{
            fill(200, 200, 100);
        }
        stroke(0,100,200);
        strokeWeight(5);
        circle(this.x, this.y,this.r*2 );
        strokeWeight(1);
        stroke(0)
        line(this.x, this.y , this.xC, this.y);
        line(this.x, this.y , this.x, this.yC);

    }

    setMouse(){
        // m.getMouse() gets down state of mouse
        if(this.mouseDown == false &&  m.getMouse() == true && this.getDistance() == true ){
            this.drag = true;
        }
        if(this.mouseDown == true &&  m.getMouse() == false ){
            this.drag = false;
        }
        this.mouseDown = m.getMouse()
    }

    getDistance(){
        var dx = mouseX - this.x;
        var dy = mouseY - this.y;
        var d = Math.sqrt( Math.pow(dx, 2) + Math.pow(dy,2));
        if(d <= this.r){
            return true
        }else{
            return false
        }
        

    }




}

class Manager{
    constructor(){
        this.mouseDown = false;
    }

    setChange(){
        if(this.mouseDown){
            this.mouseDown = false;
        } else{
            this.mouseDown = true;
        }
    }

    getMouse(){
        return this.mouseDown
    }

}


let p;
let m;


function setup() {
        createCanvas(700, 500);
        m = new Manager()
        p = new DragPoint(m);
 
    
  }


  function draw(){
        background(220);
        p.update();
  }

function mousePressed() {
        m.setChange();
        console.log("mouse pressed");
    
}


function mouseReleased() {
        m.setChange();
        console.log("mouse released");
}
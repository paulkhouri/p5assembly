
class DragPoint{
    constructor(m){
        this.x = 350;
        this.y = 250;
        this.r = 20/2;
        this.manager = m;
        this.mouseDown = false;
        this.drag = false;
    }


    update(){
        this.display();
        this.setMouse();
        if(this.drag){
            this.x = mouseX;
            this.y = mouseY;
        }
    }

    display(){
        if(!this.mouseDown){
            fill(200, 88, 100);
        }else{
            fill(200, 200, 100);
        }
        stroke(0,100,200);
        strokeWeight(5);
        circle(this.x, this.y,this.r*2 );
    }

    setMouse(){
        // m.getMouse() gets down state of mouse
        if(this.mouseDown == false &&  m.getMouse() == true && this.getDistance() == true && DragPoint.taken == false){
            this.drag = true;
            DragPoint.taken = true;
        }
        if(this.mouseDown == true &&  m.getMouse() == false ){
            this.drag = false;
            DragPoint.taken = false;
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

    setX(x){
        this.x = x;
    }

    setY(y){
        this.y =y;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
}
DragPoint.taken = false;

class Grid{
constructor(p1, p2){
    this.p1 = p1;
    this.p2 = p2;
    this.x = 300;
    this.y = 300;
    this.s = 200;
    this.p1.setX(this.x-this.s/2);
    this.p1.setY(this.y-this.s/2);
}

update(){
    this.display();
    this.p1.update();
    this.dx = this.p2.getX() - this.x;
    this.dy = this.p2.getY() - this.y;
    this.x = this.p1.getX()+this.s/2;
    this.y = this.p1.getY()+this.s/2;
    this.p2.setX( this.x +this.dx);
    this.p2.setY( this.y +this.dy);
    this.p2.update();

}

display(){
    strokeWeight(1);
    stroke(0)
    line(this.x-this.s/2, this.y , this.x + this.s/2, this.y);
    line(this.x, this.y-this.s/2 , this.x, this.y +this.s/2);
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


let p1;
let m;
let g;


function setup() {
        createCanvas(700, 500);
        m = new Manager();
        p2 = new DragPoint(m);
        p1 = new DragPoint(m);
        g = new Grid(p1,p2)
 
    
  }


  function draw(){
        background(220);
        g.update();
  }

function mousePressed() {
        m.setChange();
        console.log("mouse pressed");
    
}


function mouseReleased() {
        m.setChange();
        console.log("mouse released");
}
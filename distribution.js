console.log('distribution');

let a;
function setup() {
    createCanvas(700, 500);
    a = [];
    for(var i=0; i<20; i++){
        a.push(0);
    }
    console.log(a)
  }

  function draw() {
        background(200);
        let r = Math.floor(random(a.length));
        a[r] ++
        //console.log(r)
        stroke(255);
        fill(0);
        textSize(12);
        textAlign(CENTER);
        let w = width/a.length;
        for(var i=0; i< a.length; i++){
            rect(w*i, height-20,w,-a[i] );
            text(i, w*i+w/2, height-5);
        }
      

  
}
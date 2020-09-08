//var xoff1=0;
//var xoff2=10000;
var inc = 0.1;
var scl= 10;
var cols, rows;
var zoff=0;
var particle=[];

 
function setup(){
    createCanvas(400,400);
    cols=floor(width / scl);
    rows=floor(width / scl);


   for(var i=0;i<100;i++){ 
    particle[i]=new Particles();
   }
}

function draw(){
    background(255);
    var yoff=0;
    for(var y=0;y<rows;y++){
        var xoff=0;
        for(var x=0;x<cols;x++){
           var index=(x + y * width) * 4;
           var angle = noise(xoff,yoff,zoff) * TWO_PI;
           var v= p5.Vector.fromAngle(angle);
           xoff+=inc;
           stroke(0,50);
           push();
           translate(x * scl,y*scl);
           rotate(v.heading());
           line(0,0,scl,0);

           pop();
        }
        yoff+=inc;
       // zoff+=0.001;
    }

    for(var i=0;i<particle.length;i++){
          particle[i].update();
          particle[i].show();
          particle[i].edges();
    }
   
}


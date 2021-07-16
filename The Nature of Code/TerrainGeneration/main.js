var cols, rows;
var scl = 20;
var w = 1000;
var h = 1500;
var flying = 0;
var terrain = [];

function setup() {
  createCanvas(600, 600, WEBGL); //create a canvas of 600x600 pixeles (WEBL enable Z dimension or 3D)
  cols = w / scl;
  rows = h / scl;
  for (var x = 0; x < cols; x++) {
    terrain[x] = []; // create a 3D array?
    for (var y = 0; y < rows; y++) {
      //terrain[x][y] = 0; //default value for now
    }
  }
}

function draw() {
  flying -= 0.1;
  //var yoff = flying;
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100); //apply the perlin noie function
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background(0);
  translate(0, 50);
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}

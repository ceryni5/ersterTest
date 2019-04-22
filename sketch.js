let width = 300;
let height = 300;

let me = new Player(15, 15, 3, 10);
let map = new Map(height, width);
let terrain = [];

function setup() {
  
  createCanvas(width, height);
  background("yellow");
  terrain = map.generateMap();
  
}

function draw() {
  background("yellow");
  me.updatePos(terrain);
  
  noStroke();
  map.show();

  stroke("grey");
  strokeWeight(2);
  fill("red");
  me.show();
}



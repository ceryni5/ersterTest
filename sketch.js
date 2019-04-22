function setup() {
  //Einmal
  createCanvas(200, 200);
  background(0, 150, 150);
  
}

function draw() {
  //Wiederholt sich 
  
}

function mousePressed(){
  //Event, wenn Mouseclick
  background(0, 150, 150);

  rectMode(CENTER);
  stroke(255, 255, 255);
  fill(150, 150, 0);
  rect(mouseX, mouseY, 100, 100);
  
  fill(150, 0, 150);
  rect(mouseX, mouseY, 50, 50);
  
  noStroke();
  fill(0, 0, 0, 200);
  ellipse(mouseX, mouseY, 25, 25);
  fill(0, 0, 0, 50);
  ellipse(mouseX, mouseY, 150, 150);
  fill(0, 0, 0, 75);
  ellipse(mouseX, mouseY, 75, 75);
}

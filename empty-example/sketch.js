function setup() {
  createCanvas(400,400); 
  // frameRate(2); 
}

function draw() {
  // par defaut 60 frames / secondes

  // background(random(128)); // entre 0 (noir) et 255 (blanc)
  background(128);
  
  ellipse(55,55,55,55);
  fill(255, 0, 0);
  rect(20,20,200,200);

  stroke(255, 204, 100);
  line(20,20,200,200);

}

// Note : les coord (0,0) haut en gauche
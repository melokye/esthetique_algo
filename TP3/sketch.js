function setup() {
  const CANVA_SIZE = 700; // TODO à modifier dans les autres TP
  createCanvas(CANVA_SIZE, CANVA_SIZE);
  frameRate(1);
}

function draw(){
  const n = 10; // TODO 100
  const x = width / 4, y = height / 5;
  const pas = y * 3 / n;
  
  background(0);
  stroke(255); // couleur des lignes
  noFill(); // TODO peut être ineressant de mettre fill en noir
  for (let i = 0; i < n; i++) {
    pic(x, x * 3, y + i * pas, pas / 2);
  }

  stroke(250, 0, 0); // couleur des lignes
  line(x, y, x * 3, y); // TODO à supp, test pour le pas
}

function pic(x, x_max, y, y_max){
  let progress = random(x_max - x);
  curve(x, y, x, y, 
    x_max - progress, y - random(y_max),
    x_max, y);
  return progress;  
}
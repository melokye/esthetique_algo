function setup() {
  const CANVA_SIZE = 700; // TODO à modifier dans les autres TP
  createCanvas(CANVA_SIZE, CANVA_SIZE);
  frameRate(1);
}

function draw(){
  const n = 10; // TODO 80
  const x = width / 4, y = height / 5;
  const pas = y * 3 / n;

  let noiseVal =  noise(pas) * pas;
  background(0);
  stroke(255); // couleur des lignes
  noFill(); // TODO peut être ineressant de mettre fill en noir

  for (let i = 0; i < n; i++) {
    let progress = x;
    line(x, y + i * pas, x + 2*x / 3, y + i * pas);
    // progress += pic(progress, x + x / 3, y + i * pas, pas / 2);
    // progress += pic(progress, x + x / 3, y + i * pas, pas);
    // progress += pic(progress, x + x / 3, y + i * pas, pas / 2);
    line(width - x - 2*x / 3 , y + i * pas, width - x, y + i * pas);
  }  

  stroke(250, 0, 0); // couleur des lignes
  line(x, y, x * 3, y); // TODO à supp, test pour le pas
}

function pic(x, x_max, y, y_max){
  let progress = noise(y);
  line(x, y, x, y - progress * y_max);
  return progress;  
}
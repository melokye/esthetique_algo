function setup() {
  const CANVA_SIZE = 700; // TODO à modifier dans les autres TP
  createCanvas(CANVA_SIZE, CANVA_SIZE);
  frameRate(1);
}

function draw() {
  background(0);
  const n = 10; // TODO 100
  let x = width / 4;
  let y = height / 5;
  const pas = y * 3 / n;
  
  stroke(255); // couleur des lignes
  noFill();
  for (let i = 0; i < n; i++) { 
    beginShape();
    /* 
      Note : 
      - il faut au minimum 4 appel de la fonction 
      curveVertex pour que ça affiche quelque chose
      - il faut commencer de la gauche vers la droite
    */
    stroke(255); // couleur des lignes
    curveVertex(x * 3, y + i * pas); // fin
    curveVertex(x * 3, y + i * pas); // forcer la fin

    pic(x, x * 3, y + i * pas, pas / 2);

    curveVertex(x, y + i * pas); // pour forcer le point de début
    curveVertex(x, y + i * pas); // début
    // signal(x + x / 3, x * 2, y + i * pas , pas);
    // signal(x * 2, x * 3 - 2*x/3, y + i * pas , pas);    

    endShape();
  }

  stroke(250, 0, 0); // couleur des lignes
  line(x, y, x * 3, y); // TODO à supp, test pour le pas
}

function pic(x, x_max, y, max_height) {
  /*
  let progress = 0;
  while(progress < x * 3){
    progress += random(x_max - x - progress);
  }
  */
  curveVertex(x_max, y);
  curveVertex(x_max - random(x_max - x), y - random(max_height));
  curveVertex(x, y);

  // curveVertex(x + x/3, y - noiseVal);
  // curveVertex(x_max - 2*x/3,  y  - noiseVal);

}
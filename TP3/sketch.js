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
  // curveTightness(3);
  for(let i = 0; i < n; i++){
    let noiseVal =  noise(pas) * pas;

    beginShape();
    curveVertex(x,  y + i * pas); // début
      /* 
        Note : il faut au minimum 4 appel de la fonction 
        pour que ça affiche quelque chose
      */
    curveVertex(x, y + i * pas - noiseVal);
    curveVertex(x + x/3, y + i * pas - noiseVal);
    curveVertex(x * 3 - 2*x/3,  y + i * pas - noiseVal);
    curveVertex(x * 3,  y + i * pas - noiseVal);

    curveVertex(x * 3,  y + i * pas); // fin
    endShape();
  }
}
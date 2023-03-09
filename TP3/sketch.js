function setup() {
  const CANVA_SIZE = 700; // TODO à modifier dans les autres TP
  createCanvas(CANVA_SIZE, CANVA_SIZE); 
  frameRate(1);
}

function draw() {
  background(0);
  const n = 50; // TODO 100
  let x = width / 4;
  let y = height / 5;
  const pas = y * 3 / n;

  stroke(255);
  for(let i = 0; i < n; i++){
    line(x, y + i * pas, x * 3, y + i * pas); // TODO à supp, test pour le pas
    // let progress = x;
    // while(progress < x * 3){
      // let noiseVal = noise((y + i * pas) * pas);
      // if(progress <  x * 2 / 3 || progress >  x * 2 * 2/ 3){

      // }
      // progress += 5;
    // }
  }
}
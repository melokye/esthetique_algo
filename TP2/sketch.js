
let COLOR = [
  [97, 8, 84],      // Ash gray
  [244, 28, 21],    // Raisin black
  [335, 16, 41],    // Wenge
  [353, 32, 96],    // Cherry blossom pink
  [335, 19, 97],    // Fairy Tale
  [190, 78, 55]     // Teal
];

let SQUARE_SIZE = 50;
let CANVA_SIZE = 800;

function setup() {
  createCanvas(CANVA_SIZE, CANVA_SIZE); 
  frameRate(2); 
  colorMode('HSB', 100); // = Hue / Teinte, Saturation, Brightness/Brillance
}

function draw() {
  background(0);
  grille(12, 12);
}

function grille(line, column){ // size de la grille == 600;
  let border_width = (CANVA_SIZE - line * SQUARE_SIZE) / 2;
  let border_height = (CANVA_SIZE - column * SQUARE_SIZE) / 2;

  for (let i = 0; i < line; i++) {   
    for (let j = 0; j < column; j++) {
      drawSquare(border_width + SQUARE_SIZE * i, border_height + SQUARE_SIZE * j);
    }
  }
}

function drawSquare(x, y){
  let pick = [random(255), random(50), random(50)];
  // let pick = [50, 50, 50];
  // let pick = random(COLOR.length);
  console.log(pick + " " +  COLOR[pick]);
  // let pick = COLOR[random(COLOR.length - 1)];
  fill(pick);
  stroke(100);
  square(x, y, SQUARE_SIZE);
}
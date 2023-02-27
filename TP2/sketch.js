"use strict"
let PALETTE;

let SQUARE_SIZE = 50;
let CANVA_SIZE = 800;
let DOMINATE = false;
let BUTTON;

function setup() {
  createCanvas(CANVA_SIZE, CANVA_SIZE); 
  frameRate(1); 
  colorMode('HSB', 360, 100, 100); // = Hue / Teinte, Saturation, Brightness/Brillance
  PALETTE = [      
    color('hsb(97,8%,84%)'),        // Ash gray
    color('hsb(244, 28%, 21%)'),    // Raisin black
    color('hsb(335, 16%, 41%)'),    // Wenge
    color('hsb(353, 32%, 96%)'),    // Cherry blossom pink
    color('hsb(335, 19%, 97%)'),    // Fairy Tale
    color('hsb(190, 78%, 55%)')     // Teal
  ];

  BUTTON = createButton('Change Proba');
  BUTTON.position(SQUARE_SIZE * 7, SQUARE_SIZE);
  BUTTON.mousePressed(change);
}

function draw() {
  background(255);

  if(DOMINATE){
    let pick = floor(random(PALETTE.length));
    grille(12, 12, PALETTE[pick]);
  }else{
    grille(12, 12, null);
  }
}

function grille(line, column, dominate){ // size de la grille == 600;
  let border_width = (CANVA_SIZE - line * SQUARE_SIZE) / 2;
  let border_height = (CANVA_SIZE - column * SQUARE_SIZE) / 2;

  for (let i = 0; i < line; i++){
    for (let j = 0; j < column; j++) {
      let pick;
      let roll; 
      if(dominate === null){
        roll = floor(random(PALETTE.length));
        pick = PALETTE[roll];
      }else{
        roll = floor(random(PALETTE.length * 2));
        if(roll % 2 === 0){
          pick = dominate;
        }else{
          pick = PALETTE[floor(roll / 2)];
        }
      }
      drawSquare(border_width + SQUARE_SIZE * i, border_height + SQUARE_SIZE * j, pick);
    }
  }
}

function drawSquare(x, y, color){
  fill(color);
  stroke(100);
  square(x, y, SQUARE_SIZE);
}

function change(){
  DOMINATE = !DOMINATE;
}
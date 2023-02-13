
// let color = [,,,,,];
let carre_taille = 50;

function setup() {
  let size = 800;
  createCanvas(size, size); 
  // frameRate(2); 
  colorMode('HSB', 100); // = Hue / Teinte, Saturation, Brightness/Brillance
}

function draw() {
  // par defaut 60 frames / secondes
  background(0);
  
  grille();
  // carre(100, 100);
}

// Note : les coord (0,0) haut en gauche

function grille(){
  let size = 600;
  let border = carre_taille;

  stroke(255);
  for (let i = 1; i <= 12; i++) {
    carre(carre_taille * i, border);
    // for(let j = 1, j < 12; j++){
    //   carre(carre_taille * i, border * 2);
    // }
    line(border, carre_taille * i, size + border, carre_taille * i);
    line(carre_taille * i, border, carre_taille * i, size + border);
  }

}

function carre(x, y){
  let c = [random(255), random(50), random(50)];
  fill(c);
  stroke(100);
  square(x, y, carre_taille);
}
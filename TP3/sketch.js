function setup() {
  const CANVA_SIZE = 700;
  createCanvas(CANVA_SIZE, CANVA_SIZE);
  noLoop(); // On a besoin de l'exécuter qu'une fois
}

function draw(){
  const n = 20; // TODO 80
  
  // Coordonnées de "point"
  const x = width / 4, y = height / 5;
  
  const pas = y * 3 / n;
  
  background(0);
  stroke(255); // couleur des lignes
  
  let seed = 0.00;
  for (let i = 0; i < n; i++){

    line(x, y + i * pas, 
         x + 2*x / 3, y + i * pas); // début
    
    let j = x + 2/3 * x;
    let wave = y + i * pas; // TODO renommer wave ?
    
    while(j < width - x - 2*x / 3){ // TODO modif la condition
      // TODO modif seed / max pour que ça marche aussi avec beaucoup de n (jsp trop cmt fctne noise en fait)
      let tmp_x = coord(j, n + seed, j); 
      let tmp_y = coord(y + i * pas, - (pas + seed), j); 
      
      seed += 0.01;
      line(j, wave, tmp_x, tmp_y);
      j = tmp_x;
      wave = tmp_y;
    }
    
    // pour relier la 2e et la 3e partie
    line(j, wave, 
         width - x - 2*x / 3, y + i * pas); 
    
    line(width - x - 2*x / 3 , y + i * pas, 
         width - x, y + i * pas); // fin
  }
  
  /*
  // TODO à supp, test / ref
  stroke(250, 0, 0);
  line(x, y, x * 3, y);
  */
}

function coord(min, max, seed){
  return min + noise(seed) * max;
}
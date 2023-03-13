function setup() {
<<<<<<< HEAD
  const CANVA_SIZE = 700;
  createCanvas(CANVA_SIZE, CANVA_SIZE);
  noLoop(); // On a besoin de l'exécuter qu'une fois
=======
  const CANVA_SIZE = 500;
  createCanvas(CANVA_SIZE, CANVA_SIZE);
  frameRate(1); // TODO, vu que noise ne bouge pas, autant ne l'executer qu'une fois
>>>>>>> bfa4b6b60fc01fc09b134c52fa49c1f927e11070
}

function draw(){
  const n = 20; // TODO 80
  
  // Coordonnées de "point"
  const x = width / 4, y = height / 5;
  
  const pas = y * 3 / n;
<<<<<<< HEAD
  
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
=======

  let noiseVal =  noise(pas) * pas; // non utilisé encore
  background(0);
  stroke(255); // couleur des lignes

  for (let i = 0; i < n; i++) {
    let progress = x;
    line(x, y + i * pas, 
         x + 2*x / 3, y + i * pas); // début
    
    let j = x + 2/3 * x;
    let wave = y + i*pas;
    
    while(j < width - x - 2*x / 3){
      let end = noise(j) * n;
      wave = pic(j, end + j, wave, pas);
      j += end;
      
      end = noise(j) * n;
      wave = pic(j, end + j, wave, - 1/2 * pas);
      j += end;
    }
    
    
    
    line(width - x - 2*x / 3 , y + i * pas, 
         width - x, y + i * pas); // fin
  }  

  // TODO à supp, test / ref
  stroke(250, 0, 0);
  line(x, y, x * 3, y);
  //
}

function pic(begin, end, y, pas){
  let up = y - noise(y) * pas;
  let mid = begin + (end-begin) / 2;
  let down = y - noise(begin) * pas;
  line(begin, y, mid, up);
  line(mid, up, end, down);
  return down;
>>>>>>> bfa4b6b60fc01fc09b134c52fa49c1f927e11070
}
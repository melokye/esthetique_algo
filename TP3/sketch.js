function setup() {
  const CANVA_SIZE = 500;
  createCanvas(CANVA_SIZE, CANVA_SIZE);
  frameRate(1); // TODO, vu que noise ne bouge pas, autant ne l'executer qu'une fois
}

function draw(){
  const n = 10; // TODO 80
  const x = width / 4, y = height / 5;
  const pas = y * 3 / n;

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
}
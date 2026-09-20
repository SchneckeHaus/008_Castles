const CANVAS_DIMENSION = 400
const CELL_DIMENSION = 40
const COLUMN_ROW_AMOUNT = CANVAS_DIMENSION/CELL_DIMENSION

let castleImg;

function preload() {
  castleImg = loadImage('castle.svg');
}

function setup() {
  createCanvas(CANVAS_DIMENSION, CANVAS_DIMENSION);
  grid();
}

//grid is the master function, the other helper functions need to feed INTO this and therefor have no loops
//grid handles the loop the helper functions handle the logic only
function grid(x,y) {
    for (let x = 0; x < COLUMN_ROW_AMOUNT; x++) {
      for (let y = 0; y < COLUMN_ROW_AMOUNT; y++) {

        let px = x * CELL_DIMENSION;
        let py = y * CELL_DIMENSION;
        fill (grid_Colour(x,y))
        rect (px,py,CELL_DIMENSION,CELL_DIMENSION)
        mountain_draw(px,py,20)
      }
    }
}

function grid_Colour(x, y) {
    const noiseScale = 0.1;
    let n = noise(x * noiseScale, y * noiseScale);
  
    if (n < 0.4) {
      return color('#d9d9d9');
    } else if (n < 0.6) {
      return color('#a6a6a6');
    } else {
      return color('#595959');
    }
  }

  function mountain_draw(x, y, size){
    imageMode(CENTER);
    push();
    translate(CELL_DIMENSION / 2, CELL_DIMENSION / 2);
    image(castleImg, x, y, size, size);
    pop();
  }
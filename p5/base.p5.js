const scale = 30;
const w = 550;
const h = 1350;

var flightPos = 0;
var cols, rows;
var terrain = [];

const Controls = function () {
  this.flightSpeed = 0.006;
  this.noiseDelta = 0.16;
  this.terrainHeight = 90;
};

export function setup(p5, canvasParentRef) {
  let canvas = p5.createCanvas(1920, 800, p5.WEBGL);
  canvas.parent(canvasParentRef);
  canvas.id("canvas");
  canvas.class("canvas");
  cols = w / scale;
  rows = h / scale;

  for (let x = 0; x < cols; ++x) {
    terrain[x] = [];
  }
}

export function draw(p5) {
  let settings = new Controls();

  flightPos -= settings.flightSpeed;
  shiftNoiseSpace(p5);

  p5.background(0, 0, 0, 0);
  p5.stroke(111, 114, 181);
  p5.strokeWeight(0.9);
  p5.noFill();

  // goc nhin
  p5.rotateX(3.14 / 3.5);
  //goc quay
  p5.rotateZ(3.14 / 2.11);
  //di chuyen
  p5.translate(-w / 2, -h / 2);

  for (let y = 0; y < rows - 1; ++y) {
    //beginShape(TRIANGLE_STRIP);
    p5.beginShape();
    for (let x = 0; x < cols; ++x) {
      p5.vertex(x * scale, y * scale, terrain[x][y]);
      p5.vertex(x * scale, (y + 1) * scale, terrain[x][y + 1]);
    }
    p5.endShape();
  }
}

function shiftNoiseSpace(p5) {
  let settings = new Controls();
  let yOffset = flightPos;
  for (let y = 0; y < rows; ++y) {
    let xOffset = 0;
    for (let x = 0; x < cols; ++x) {
      terrain[x][y] = p5.map(
        p5.noise(xOffset, yOffset),
        0,
        1,
        -settings.terrainHeight,
        settings.terrainHeight
      );
      xOffset += settings.noiseDelta;
    }
    yOffset += settings.noiseDelta;
  }
}

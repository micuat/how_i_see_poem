// To see a World in a Grain of Sand
// And a Heaven in a Wild Flower,
// Hold Infinity in the palm of your hand
// And Eternity in an hour.

var text = [];
var s = function (sketch) {

  sketch.setup = function () {
    sketch.createCanvas(800, 800);
    text.push("To see a World in a Grain of Sand");
    text.push("And a Heaven in a Wild Flower,");
    text.push("Hold Infinity in the palm of your hand");
    text.push("And Eternity in an hour.");

    let myFont = sketch.createFont("../HelveticaNeue-Light-05.ttf", 32);
    sketch.textFont(myFont);

  }
  sketch.draw = function () {
    sketch.background(0);
    sketch.lights();
    // sketch.directionalLight(255, 255, 255, 0, 1, -1);
    // sketch.lightSpecular(204, 204, 204);

    sketch.translate(sketch.width / 2, sketch.height / 2, -100);

    sketch.noStroke();
    sketch.fill(255);
    sketch.push();
    sketch.translate(0, 0, 1);
    let index = sketch.floor(sketch.millis()*0.00025) % text.length;
    sketch.textAlign(sketch.CENTER);
    sketch.text(text[index], 0, 350)
    sketch.pop();
    sketch.fill(150, 170, 0);

    sketch.rotateX(sketch.PI / 2);
    // sketch.rotateZ(sketch.PI / 4);


    let ph = sketch.millis() * 0.00005 % 1;
    let xs = [];
    let ys = [];
    let zs = [];

    for (let i = 0; i <= 16; i++) {
      xs[i] = [];
      ys[i] = [];
      zs[i] = [];

      let s = 0.05 + sketch.pow(sketch.abs(i-sketch.millis()*0.001%16), 2)/16/8;
      for (let j = 0, angle = -sketch.PI; angle <= sketch.PI; j++ , angle += 0.01) {
        let r = 300;
        let x = s * r * sketch.cos(angle);
        let y = s * r * sketch.sin(angle);
        let z = sketch.map(i, 0, 16, -150, 250);

        xs[i][j] = x;
        ys[i][j] = y;
        zs[i][j] = z;
      }
    }
    for (let i = 0; i <= 16; i++) {
      sketch.beginShape(sketch.TRIANGLE_STRIP);
      for (let j = 0, angle = -sketch.PI; angle <= sketch.PI; j++ , angle += 0.01) {
        sketch.vertex(xs[i][j], ys[i][j], zs[i][j]);
        sketch.vertex(xs[i + 1][j], ys[i + 1][j], zs[i + 1][j]);
      }
      sketch.endShape();
    }

  }

};

var myp5 = new p5(s);


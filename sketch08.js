// wherever you are, and whatever you do, be in love.

var s = function (sketch) {
  var text = [];
  var index = 0;
  var lastT = 0;

  sketch.setup = function () {
    sketch.createCanvas(800, 800);

    text.push("wherever you are,");
    text.push("and whatever you do,");
    text.push("be in love.");
    text.push("be in love.");

    let myFont = sketch.createFont("../HelveticaNeue-Light-05.ttf", 32);
    sketch.textFont(myFont);
  }
  sketch.draw = function () {
    sketch.background(0);
    let freq = 120;

    // sketch.translate(sketch.width/2, sketch.height/2);

    sketch.fill(255);

    sketch.translate(sketch.width / 2, sketch.height / 2);
    sketch.stroke(255);
    sketch.strokeWeight(2);
    let t = sketch.millis() * 0.0005;
    let ti = sketch.floor(t) % text.length;
    sketch.textAlign(sketch.CENTER);
    sketch.text(text[ti], 0, 250);

    sketch.noStroke();
    sketch.fill(255);
    // sketch.ellipse(0, 0, 150);
    let n = sketch.sin(sketch.millis() * 0.00025 * sketch.TWO_PI);
    n = sketch.floor(sketch.map(n, -1, 1, 10, 70));
    for (let i = 0; i < n; i++) {
      sketch.fill(sketch.map(i, 0, n, 0, 255));
      sketch.ellipse(0, 0, 200 - i);
    }
    if (ti >= 2) {
      sketch.blendMode(sketch.MULTIPLY);
      let r = 200;
      let g = 0;
      let b = 0;
      let te = t % 2;
      if (te < 0.75) {
        r = sketch.map(te, 0, 0.75, 255, 200);
        g = b = sketch.map(te, 0, 0.75, 255, 0);
      }
      if (te > 1.25) {
        r = sketch.map(te, 1.25, 2, 200, 255);
        g = b = sketch.map(te, 1.25, 2, 0, 255);
      }
      sketch.fill(r, g, b);

      sketch.push();
      // te = sketch.map(te, 0, 0.5, 100, 10);
      // te = sketch.constrain(te, 10, 100);
      te = 10;
      sketch.rotate(t * 4 * sketch.TWO_PI % sketch.TWO_PI);
      sketch.translate(te, 0);
      for (let i = 0; i < sketch.map(r, 200, 255, 10, 0); i++) {
        sketch.fill(255, 200, 200);
        sketch.ellipse(0, 0, 200 - i * 5);
      }
      sketch.pop();

      sketch.rect(0, 200, 100, 100);
      sketch.blendMode(sketch.BLEND);
    }
    else {
    }
  }

};

var myp5 = new p5(s);


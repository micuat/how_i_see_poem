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
    sketch.ellipse(0, 0, 150);
    if(ti >= 2) {
      sketch.blendMode(sketch.MULTIPLY);
      let r = 200;
      let g = 0;
      let b = 0;
      let te = t % 2;
      if(te > 1.5) {
        r = sketch.map(te, 1.5, 2, 200, 255);
        g = b = sketch.map(te, 1.5, 2, 0, 255);
      }
      sketch.fill(r, g, b);

      sketch.push();
      te = sketch.map(te, 0, 1, 150, 10);
      te = sketch.constrain(te, 10, 150);
      sketch.rotate(t * 4 * sketch.TWO_PI % sketch.TWO_PI);
      sketch.ellipse(te, 0, 150);
      sketch.pop();

      sketch.rect(0, 200, 100, 100);
      sketch.blendMode(sketch.BLEND);
    }
    else {
    }
  }

};

var myp5 = new p5(s);


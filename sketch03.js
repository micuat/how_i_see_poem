// If today's arts love the machine, technology and organization, if they aspire to precision and reject anything vague and dreamy, this implies an instinctive repudiation of chaos and a longing to find the form appropriate to our times.

var text = [];
var s = function (sketch) {

  sketch.setup = function () {
    sketch.createCanvas(800, 800);
    text.push("If today's arts love the machine,");
    text.push("technology and organization,");
    text.push("if they aspire to precision");
    text.push("and reject anything vague and dreamy,");
    text.push("this implies an instinctive repudiation");
    text.push("of chaos and a longing to");
    text.push("find the form appropriate to our times.");

    let myFont = sketch.createFont("../HelveticaNeue-Light-05.ttf", 32);
    sketch.textFont(myFont);

  }
  sketch.draw = function () {
    sketch.background(0);
    sketch.directionalLight(255, 255, 255, 0, 1, -1);
    sketch.lightSpecular(204, 204, 204);

    sketch.translate(sketch.width / 2, sketch.height / 2, -100);
    sketch.rotateX(sketch.PI / 3);
    sketch.rotateZ(sketch.PI / 4);

    sketch.noStroke();
    sketch.fill(255);
    sketch.rect(-400, -400, 800, 800);
    sketch.fill(0);
    sketch.push();
    sketch.rotate(-sketch.PI / 2);
    sketch.translate(0, 0, 1);
    let index = sketch.floor(sketch.millis()*0.00025) % text.length;
    sketch.text(text[index], -300, 200)
    sketch.pop();
    sketch.fill(150, 0, 0);

    let ph = sketch.millis() * 0.00005 % 1;
    let xs = [];
    let ys = [];

    for (let i = 0; i < 16; i++) {
      xs[i] = [];
      ys[i] = [];

      let s = sketch.sqrt(1 - i / 16);
      for (let j = 0, angle = -sketch.PI; angle <= sketch.PI; j++ , angle += 0.01) {
        let r = 300 / (sketch.abs(angle) + 0.9);
        let x = -100 + s * r * sketch.cos(angle) - 10 * sketch.sin(ph * sketch.TWO_PI + i * 0.05) * i;
        let y = s * r * sketch.sin(angle);

        xs[i][j] = x;
        ys[i][j] = y;
      }
    }
    for (let i = 0; i < 15; i++) {
      sketch.beginShape(sketch.TRIANGLE_STRIP);
      for (let j = 0, angle = -sketch.PI; angle <= sketch.PI; j++ , angle += 0.01) {
        sketch.vertex(ys[i][j], xs[i][j], i * 10 + 0.01);
        sketch.vertex(ys[i + 1][j], xs[i + 1][j], (i + 1) * 10 + 0.01);
      }
      sketch.endShape();
    }
    {
      let i = 15;
      sketch.beginShape(sketch.TRIANGLE_FAN);
      sketch.vertex(ys[i][0], xs[i][0] + 50, (i + 1) * 10 + 0.01);
      for (let j = 0, angle = -sketch.PI; angle <= sketch.PI; j++ , angle += 0.01) {
        sketch.vertex(ys[i][j], xs[i][j], i * 10 + 0.01);
      }
      sketch.endShape();
    }

  }

};

var myp5 = new p5(s);


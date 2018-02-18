// Mon auberge était à la Grande-Ourse. My shelter was under the Great Dipper.

var text = [];
var center = -20;
var s = function (sketch) {

  sketch.setup = function () {
    sketch.createCanvas(800, 800);
    text.push("My shelter was under the Great Dipper.");

    let myFont = sketch.createFont("../HelveticaNeue-Light-05.ttf", 32);
    sketch.textFont(myFont);

  }
  sketch.draw = function () {
    sketch.background(0);

    sketch.fill(255);
    sketch.push();
    sketch.rotate(-sketch.PI / 2);
    sketch.translate(-450, 8, -100);
    let index = sketch.floor(sketch.millis()*0.00025) % text.length;
    sketch.text(text[index], -250, 400)
    sketch.pop();

    sketch.directionalLight(255, 255, 255, 0, -0.5, -1);
    sketch.lightSpecular(204, 204, 204);

    sketch.translate(sketch.width / 2, sketch.height / 2, -100);
    sketch.rotateX(-sketch.PI / 2);
    sketch.rotateZ(sketch.PI / 4);

    sketch.noStroke();
    sketch.fill(255);
    sketch.translate(0, 0, -300);
    sketch.ellipse(0, 0, 300, 300)
    sketch.fill(0, 150, 150);

    let ph = sketch.millis() * 0.00005 % 1;
    let xs = [];
    let ys = [];

    let t = sketch.millis() * 0.02;
    for (let i = 0; i < 64; i++) {
      xs[i] = [];
      ys[i] = [];

      let s = 1;
      center += ((center<0)?0.001:0.005);
      if(center > 100) center = -8;
      for (let j = 0, angle = -sketch.PI; angle <= sketch.PI; j++ , angle += sketch.PI/100) {
        let diff = i-center;
        if(i < center) diff *= 0.75;
        let sin = (50 - diff*diff)/50;
        if(sin<0) sin = 0;
        if(i>center)
          sin = sketch.sqrt(sin);
        let r = sin * 70;
        let x = s * r * sketch.cos(angle);
        let y = s * r * sketch.sin(angle);

        xs[i][j] = x;
        ys[i][j] = y;
      }
    }
    for (let i = 0; i < 63; i++) {
      sketch.beginShape(sketch.TRIANGLE_STRIP);
      for (let j = 0; j < ys[i].length; j++) {
        sketch.vertex(ys[i][j], xs[i][j], i * 10 + 0.01);
        sketch.vertex(ys[i + 1][j], xs[i + 1][j], (i + 1) * 10 + 0.01);
      }
      sketch.endShape();
    }
    if(0)
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


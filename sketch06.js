// Since loving is about knowing, we have more meaningful love relationships when we know each other and it takes time to know each other.

function Screw(sketch, x) {
  this.angle = 0;
  this.x = x;
  this.dx = x / sketch.abs(x) * 1;

  this.mode = 0;

  this.draw = function () {
    if (sketch.frameCount % 60 == 0) {
      if(this.mode == 2) this.mode = 2.5;
      else this.mode = sketch.floor(sketch.random(5));
    }

    if (this.mode == 0 || this.mode == 3) {
      this.angle += 0.01;
    }
    else if (this.mode == 1 || this.mode == 4) {
      this.angle -= 0.02;
    }
    else if (this.mode == 2) {
      this.x -= this.dx;
    }
    else if (this.mode == 2.5) {
      this.x += this.dx;
    }

    sketch.push();
    sketch.fill(155);
    sketch.translate(this.x, 0, 0);
    sketch.rotateX(this.angle);
    sketch.box(100, 40, 40);
    sketch.pop();
  }
}

var text = [];
var s = function (sketch) {

  var screws = [];

  sketch.setup = function () {
    sketch.createCanvas(800, 800);
    text.push("Since loving is about knowing,");
    text.push("we have more meaningful love relationships");
    text.push("when we know each other");
    text.push("and it takes time to know each other.");

    let myFont = sketch.createFont("../HelveticaNeue-Light-05.ttf", 32);
    sketch.textFont(myFont);

    screws.push(new Screw(sketch, 250));
    screws.push(new Screw(sketch, -250));
  }
  sketch.draw = function () {
    sketch.background(0);
    sketch.directionalLight(255, 255, 255, 0, 0.2, -1);
    sketch.lightSpecular(204, 204, 204);

    sketch.translate(sketch.width / 2, sketch.height / 2, -100);

    // sketch.rotateY(sketch.millis()*0.001);
    sketch.noStroke();
    sketch.fill(255);
    sketch.drawCylinder(50, 250);
    sketch.fill(155,0,0);
    sketch.drawCylinder(40, 265);

    for (let i in screws) {
      screws[i].draw();
    }

    sketch.fill(255);
    sketch.push();
    sketch.translate(0, 0, 1);
    sketch.textAlign(sketch.CENTER);
    let index = sketch.floor(sketch.millis() * 0.00025) % text.length;
    sketch.text(text[index], 0, 300)
    sketch.pop();
    sketch.fill(150, 0, 0);


  }
  sketch.drawCylinder = function (r, w) {
    sketch.beginShape(sketch.TRIANGLE_STRIP);
    for (let angle = 0; angle < sketch.TWO_PI; angle += 0.01 * sketch.TWO_PI) {
      let x = r * sketch.cos(angle);
      let y = r * sketch.sin(angle);
      sketch.vertex(w, x, y);
      sketch.vertex(-w, x, y);
    }
    sketch.endShape();
  }
};

var myp5 = new p5(s);


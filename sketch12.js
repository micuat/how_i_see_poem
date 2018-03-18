// I held a jewel in my fingers And went to sleep. The day was warm, and winds were prosy; I said: “ ‘T will keep.” I woke and chid my honest fingers, The gem was gone; And now an amethyst remebrance Is all I own

var text = [];
var s = function (sketch) {

  sketch.setup = function () {
    sketch.createCanvas(800, 800);
    text.push("I held a jewel in my fingers");
    text.push("And went to sleep.");
    text.push("The day was warm,");
    text.push("and winds were prosy;");
    text.push("I said: \"'T will keep.\"");
    text.push("I woke and chid my honest fingers,");
    text.push("The gem was gone;");
    text.push("And now an amethyst remebrance.");
    text.push("Is all I own");
    text.push("");
    text.push("");

    let myFont = sketch.createFont("../HelveticaNeue-Light-05.ttf", 32);
    sketch.textFont(myFont);

  }
  sketch.draw = function () {
    sketch.background(0);
    sketch.directionalLight(255, 255, 255, 0.5, 0.75, -1);
    sketch.lightSpecular(204, 204, 204);

    sketch.translate(sketch.width / 2, sketch.height / 2, -50);
    sketch.rotateX(sketch.PI / 6);
    sketch.rotateZ(sketch.PI / 3);

    sketch.noStroke();
    sketch.fill(255);
    sketch.rect(-400, -400, 800, 800);
    sketch.fill(255);
    sketch.push();
    // sketch.rotate(-sketch.PI / 2);
    sketch.rotateX(-sketch.PI/2);
    sketch.rotateZ(sketch.PI/2);
    sketch.translate(0, 0, 1);
    let index = sketch.floor(sketch.millis()*0.0005) % text.length;
    sketch.textAlign(sketch.CENTER);
    sketch.text(text[index], 200-(sketch.millis()*0.0005 % 1) * 500, 0)
    sketch.text(text[(index-1+text.length)%text.length], 200-((sketch.millis()*0.0005 % 1)+1) * 500, 0)
    sketch.pop();
    sketch.fill(0);

    sketch.translate(0, 0, 1);
    sketch.ellipse(0, 0, 200);
    sketch.translate(0, -100, 0);
    if(index <= 8)
      sketch.rotateX(sketch.PI/2);
    if(index == 9) {
      let t = sketch.millis()*0.0005 % 1;
      sketch.rotateX(sketch.constrain(sketch.map(t, 0, 0.5, sketch.PI/2, 0), 0, sketch.PI/2));
    }
    if(index == text.length-1) {
      let t = sketch.millis()*0.0005 % 1;
      sketch.rotateX(sketch.constrain(sketch.map(t, 0.5, 1, 0, sketch.PI/2), 0, sketch.PI/2));
    }
    sketch.translate(0, 100, 0);
    sketch.fill(255);
    sketch.ellipse(0, 0, 200);
  }

};

var myp5 = new p5(s);


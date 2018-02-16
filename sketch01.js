// Mistakes were made. Bodies were broken. People were enslaved. We meant well. We tried our best. "Good intention" is a hall pass through history, a sleeping pill that ensures the Dream.
var s = function (sketch) {
  var pts = [];
  var p0s = [];
  var p1s = [];

  var text = [];

  sketch.setup = function () {
    sketch.createCanvas(800, 800);

    text.push("Mistakes were made.");
    text.push("Bodies were broken.");
    text.push("People were enslaved. ");
    text.push("We meant well.");
    text.push("We tried our best.");
    text.push("\"Good intention\" is");
    text.push("a hall pass");
    text.push("through history,");
    text.push("a sleeping pill");
    text.push("that ensures the Dream.");

    let myFont = sketch.createFont("../HelveticaNeue-Light-05.ttf", 32);
    sketch.textFont(myFont);
  
    pts.push(sketch.createVector(0, 0));

    for(let i = 0; i < 16; i++) {
      pts.push(sketch.createVector(sketch.random(-200, 200), sketch.random(-200, 200)));
    }

    for(let i = 0; i < 5; i++) {
      p0s.push(pts[0]);
      p1s.push(pts[1]);
    }
  }
  sketch.draw = function () {
    sketch.background(0);
    let freq = 60;

    sketch.translate(sketch.width/2, sketch.height/2);

    let ti = sketch.floor(sketch.frameCount / (freq)) % text.length;
    // sketch.text(text[ti], 0, 700);
    // let p0 = sketch.random(pts);
    // p0 = pts[0];

    for(let i = 0; i < p0s.length; i++) {
      if((sketch.frameCount+i*6*2) % freq == 0) {
        p0s[i] = p1s[i];
        if((sketch.frameCount+i*6*2) % (freq * 4) == 0) {
          p1s[i] = pts[0];
        }
        else {
          do {
            p1s[i] = sketch.random(pts);
          } while (p0s[i] == p1s[i] || p1s[i] == pts[0])
        }
      }
      let p0 = p0s[i];
      let p1 = p1s[i];
      sketch.stroke(255);
      if(i!=0) {
        sketch.stroke(255, 128);
      }
      // sketch.point(pts[0].x, pts[0].y);
      let t = ((sketch.frameCount+i*6*2) % freq) / freq;
      let x0 = p0.x;
      let y0 = p0.y;
      let dx = p1.x - x0;
      let dy = p1.y - y0;
      let r = sketch.sqrt(dx * dx + dy * dy);
      let theta = sketch.atan2(dy, dx);
      sketch.push();
      sketch.translate(x0, y0);
      sketch.rotate(theta);
      if(i==0)
      sketch.text(text[ti], 0, 50);

      let d = 7;
      if(t < 0.25) {
        let x = sketch.lerp(0, r, t * 2);
        sketch.line(0, 0, x, d);
        sketch.line(0, 0, x, -d);

        // sketch.fill(255);
        // sketch.beginShape();
        // sketch.vertex(0, 0);
        // sketch.vertex(x, d);
        // sketch.vertex(x, -d);
        // sketch.endShape();
      } 
      else if(t < 0.5) {
        sketch.line(0, 0, r/2, d);
        sketch.line(0, 0, r/2, -d);
        let x = sketch.lerp(0, r, t * 2);
        sketch.line(r/2, d, x, 0);
        sketch.line(r/2, -d, x, 0);

        // sketch.fill(255);
        // sketch.beginShape();
        // sketch.vertex(r/2, d);
        // sketch.vertex(0, 0);
        // sketch.vertex(r/2, -d);
        // sketch.vertex(x, 0);
        // sketch.vertex(r/2, d);
        // sketch.endShape();
      } 
      else if(t < 0.75) {
        sketch.line(r/2, d, r, 0);
        sketch.line(r/2, -d, r, 0);
        let x = sketch.lerp(0, r, (t-0.5) * 2);
        sketch.line(x, 0, r/2, d);
        sketch.line(x, 0, r/2, -d);

        // sketch.fill(255);
        // sketch.beginShape();
        // sketch.vertex(r/2, d);
        // sketch.vertex(r, 0);
        // sketch.vertex(r/2, -d);
        // sketch.vertex(x, 0);
        // sketch.endShape();
      } 
      else {
        let x = sketch.lerp(0, r, (t-0.5) * 2);
        sketch.line(x, d, r, 0);
        sketch.line(x, -d, r, 0);

        // sketch.fill(255);
        // sketch.beginShape();
        // sketch.vertex(r, 0);
        // sketch.vertex(x, d);
        // sketch.vertex(x, -d);
        // sketch.endShape();
      }
      sketch.pop();
    }
  }

};

var myp5 = new p5(s);


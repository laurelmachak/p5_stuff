let started = false;

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 canvas.parent("container");
 background(40);
 fill(255);
 textAlign(CENTER, CENTER);
 textSize(40);
 text("click anywhere to start!", width / 2, height / 2);
 // noLoop();
}

function draw() {
 // background(40,40,40,5);
}

function mousePressed() {
 // redraw();
 // background(40);

 if (!started) {
  background(40, 40, 40);
  started = true;
 }

 let reps = floor(random(1, 6));
 for (let i = 0; i < reps; i++) {
  pattern(mouseX, mouseY);
 }
}

function pattern(mx, my) {
 push();
 translate(mx, my);
 let x = floor(random(0, 70));
 let y = floor(random(0, 70));
 let w = floor(random(5, 50));
 let h = floor(random(5, 50));
 let r = floor(random(0, 255));
 let g = floor(random(0, 255));
 let b = floor(random(0, 255));
 let amt = floor(random(3, 30));
 let angle = 360 / amt;

 let shape = floor(random(0, 2));

 for (let i = 0; i < amt; i++) {
  push();
  strokeWeight(3);
  stroke(r, g, b);
  fill(r, g, b, 70);
  rotate(radians(i * angle));

  ellipse(x, y, w, h);

  // if (shape === 1){
  //  ellipse(x, y, w, h);
  // } else{
  //  rect(x, y, w, h);
  // }

  pop();
 }

 pop();
}





/*
SINE WAVE: drawn with translating the origin to each node
mini project to help me re-learn some trigonometry &
to learn about transformations in p5.js
*/

let x; // changes in the loop, x pos for each node 
let speed = 0; //the first node that adds after each loop
let amp; // wave height
let lambda; // wave length
let nodes; // number of circles in wave
let spacing = 25; // space between each circle
let G = 200; // green in rgb
let B = 100; // blue in rgb

let amp_slider;
let amp_slider_label;

let lambda_slider;
let lambda_slider_label;


function setup(){
 canvas = createCanvas(800,500);
 canvas.parent("container");
 amp = height/8;
 lambda = width/2;
 nodes = width/spacing;

 amp_slider = createSlider(0, height/2, amp, 0);
 amp_slider.changed(change_amp);
 amp_slider_label = createP("Amp: " + amp);

 lambda_slider = createSlider(0,width,lambda,0);
 lambda_slider.changed(change_lambda);
 lambda_slider_label = createP("Lambda: " + lambda);

 
}

function draw(){
 background(40);
 translate(0,height/2); // move origin of Y to halfway down
 stroke(255);
 line(0,0,width,0); // draw a line across from origin to end of canvas
 
 
 // Loop that draws each node at updated x position
 for (let i=0; i<nodes; i++){
  x = (speed - (i*spacing))%width;
  push();
  noStroke();
  B = (255 * sin((TWO_PI/lambda) * (speed/2)));
  fill(100, G, B);
  sine_wave(amp,x,lambda);
  ellipse(0,0,15,15);
  pop();
 }
 
 speed += 3.0;
 if (speed>width){
  speed = width + (speed % width);
 }

}

function mousePressed(){
 
 noLoop();
}

function mouseReleased(){
 loop();
}

function sine_wave(amplatude, x, lam){
 translate(x, (amplatude * sin((TWO_PI/lam) * x)));
}

function change_amp(){
    amp = amp_slider.value();
    amp_slider_label.html("Amp: " + amp);
    
}

function change_lambda(){
    lambda = lambda_slider.value();
    lambda_slider_label.html("Lambda: " + lambda);
}
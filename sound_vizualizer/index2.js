
var song;
let vol;
let button;
var fft;
let vol_history = [];
var w;
var total_bands = 64;
let t = 0;
let dots = [];

function preload() {
    song = loadSound('example_electronic.mp3');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("container");
    angleMode(DEGREES);
    colorMode(HSB);
    rectMode(CENTER);
    noFill(0, 255, 100);
    button = createButton('toggle');
    button.mousePressed(toggleSong);
    song.play();
    fft = new p5.FFT(0.9, total_bands);
    w = width/total_bands;
}

function draw() {
    background(0);
    // stroke(0, 255, 100);
    noStroke();
    var spectrum = fft.analyze();
    // for (let i=0; i< spectrum.length; i++){
    //     var amp = spectrum[i];
    //     var y = map(amp, 0, 255, height, 0);
    //     var color = map(i, 0, 255, 0, width);
    //     fill(color,255,255);
    //     rect(i*w, y, w-2, height-y);
    // }

    // translate(width/2, height/2);

    // for (let i=0; i<spectrum.length; i++){
    //     push();
    //     var amp = spectrum[i];
    //     var r = map(amp, 0, 255, 10, 300);
    //     var color = map(i,0, 255,0, width);
    //     fill(color, 255, 255);
    //     rotate(t);
    //     // ellipse(i*r, height/2, r, r);
    //     rect(0,0, r, r);
    //     pop();
    //     t = (t + .5) %360;
    // }

    translate(width/2, height/2);

    for (let i=0; i<spectrum.length; i++){
        push();
        var amp = spectrum[i];
        var r = map(amp, 0, 255, 10, 300);
        var color = map(i,0, 255,0, width);
        fill(color, 255, 255);
        // rotate(t);
        // ellipse(i*r, height/2, r, r);
        ellipse(0,0, r, r);
        pop();
        // t = (t + .5) %360;
    }

    // for (let i=0; i<spectrum.length; i++){
    //     // push();
    //     var amp = spectrum[i];
    //     var r = map(amp, 0, 255, 10, 100);
    //     var color = map(i,0, 255,0, width);
    //     var x = i*80;
    //     var y = height/2;
    //     fill(color, 255, 255);
    //     // rotate(t);
    //     // ellipse(i*r, height/2, r, r);
    //     ellipse(x,y, r, r);
    //     // pop();
    //     t = (t + .5) %360;
    // }

    
}

function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

class Dot{
    constructor(x,y,r,color){
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    display(){
        fill(this.color);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    update(freq){
        this.r = map(freq, 0, 255, 10, 150);
    }
}


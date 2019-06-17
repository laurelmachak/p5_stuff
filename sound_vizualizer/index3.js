let cells = [];
let size = 35;
let num = 64;

// var offset = (sqrt(num) * size)  / 2;
var offset;

var song;
let vol;
let button;
var fft;
let vol_history = [];
var w;
var total_bands = 256;
var t = 0;



function preload() {
    song = loadSound('vivaldi/John_Harrison_with_the_Wichita_State_University_Chamber_Players_-_12_-_Winter_Mvt_3_Allegro.mp3');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("container");
    // colorMode(HSB);
    angleMode(DEGREES);
    offset = (sqrt(num) * size)  / 2;
    button = createButton('toggle');
    button.mousePressed(toggleSong);
    song.play();
    fft = new p5.FFT(0.9, total_bands);
    w = width/total_bands;
    for (let i = 0; i < sqrt(total_bands); i++) {
        var y = i * size;
        for (let t = 0; t < sqrt(total_bands); t++) {

            var x = t * size;
            cells.push(new Cell(x, y));
        }
    }
}

function draw() {
    background(0);
    specularMaterial(250);
    
    var spectrum = fft.analyze();
    // translate(-width / 2 + 100, 0, 0);
    // angleMode(RADIANDS);
    // push();
    // rotateX(40);
    // pop();

    // push();
    // rotateY(20);
    // pop();

    // push();
    // rotateZ(-51);
    // pop();


    
    
    rotateX(50);
    
    rotateY(11);
    
    rotateZ(frameCount*1);
    
    
    // angleMode(DEGREES);
    // rotateY(t);
    
    translate(-offset, -offset, 0);
    // ambientLight(50);
    // directionalLight(255, 0, 0, 0.25, 0.25, 0);
    // pointLight(0, 0, 255, 0, 0, 250);

    ambientLight(10, 70, 100);
    pointLight(255,255,255,0,0,100);
    specularMaterial(255,255,2,200);

    for (let i = 0; i < 176; i++) {

        var amp = spectrum[i];
        var dep = map(amp, 0, 255, 50, 500);
        var color = map(i,0, 255,0, total_bands);
        var R = map(cells[i].x, 0,255, 0, total_bands);
        var G = map(cells[i].x, 0,255, 0, total_bands);
        specularMaterial(R,G,color,200);
        // fill(color, 255, 255);

        push();
        cells[i].d = dep;
        cells[i].display();
        pop();
    }

    // t = (t+1)%360;

    
        
    
    
}

function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = size;
        this.h = size;
        this.d = 50;
    }

    display() {
        translate(this.x, this.y, 0);
        box(this.w, this.h, this.d);
    }
}

var song;
let vol;
let button;
var amp;
let vol_history = [];


function preload(){
    song = loadSound('example_electronic.mp3');
}

function setup(){
 canvas = createCanvas(800,500);
 canvas.parent("container");
 angleMode(DEGREES);
 noFill(0,255,100);
 button = createButton('toggle');
 button.mousePressed(toggleSong);
 song.play();
 amp = new p5.Amplitude();
}

function draw(){
 background(0);
 stroke(0,255,100);
 vol = amp.getLevel();
 vol_history.push(vol);
 
 translate(width/2, height/2);
 beginShape();
 for (let i=0; i<360; i++){

     var r = map(vol_history[i], 0, 1, 30, 300);
     var x = r * cos(i);
     var y = r * sin(i);
     
     vertex(x, y);
 }
 endShape();
 
 if (vol_history.length > 360){
     vol_history.splice(0,1);
 }


}

function toggleSong(){
    if (song.isPlaying()){
        song.pause();
    } else{
        song.play();
    }
}



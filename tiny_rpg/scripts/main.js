let player;

function setup(){
 canvas = createCanvas(800,500);
 canvas.parent("container");
 player = new Player(0,0);

}

function draw(){
 background(240);
 player.move();
 player.display();
}




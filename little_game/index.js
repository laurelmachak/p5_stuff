let player;

function setup(){
 canvas = createCanvas(800,500);
 canvas.parent("container");
 player = new Player();
}

function draw(){
 background(240);
 player.display();

}

class Game_Object{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
    }

    collideRectRect(x2,y2,w2,h2){
        if (this.x + this.w >= x2 &&
            this.x <= x2 + w2 &&
            this.y + this.h >= y2 &&
            this.y <= y2 + h2){
            return true;
        }
        return false;
    }
}

class Player extends Game_Object{
    constructor(){
        super();
        this.x = 10;
        this.y = 10;
        this.w = 25;
        this.h = 25;
    }

    display(){
        fill(204, 153, 255, 90);
        stroke(204, 153, 255);
        rect(this.x, this.y, this.w, this.h);
    }
}



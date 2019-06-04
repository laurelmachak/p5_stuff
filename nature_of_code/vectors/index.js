
let m;

function setup(){
 canvas = createCanvas(800,500);
 canvas.parent("container");
m = new Mover();
}

function draw(){
 background(240);
 m.update();
 m.check_edges();
 m.display();

}


class Mover{
    constructor(){
        this.loc = createVector(width/2, height/2);
        this.vel = createVector();
        this.acceleration = createVector(-0.001,0.01);
        this.top_speed = 5;
    }

    display(){
        stroke(0);
        fill(175);
        ellipse(this.loc.x, this.loc.y, 16, 16);
    }

    update(){
        var mouse = createVector(mouseX,mouseY);
        this.acceleration = p5.Vector.sub(mouse,this.loc);
        this.acceleration.setMag(0.2);
        this.vel.add(this.acceleration);
        this.vel.limit(this.top_speed);
        this.loc.add(this.vel);

    }

    check_edges(){
        if (this.loc.x > width){
            this.loc.x = 0;
        } else if(this.loc.x < 0){
            this.loc.x = width;
        }

        if (this.loc.y > height){
            this.loc.y = 0;
        } else if(this.loc.y < 0){
            this.loc.y = height;
        }

    }
}

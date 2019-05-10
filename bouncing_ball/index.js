
let ball;


function setup(){
 canvas = createCanvas(800,500);
 canvas.parent("container");
 ball = new Ball();
}

function draw(){
 background(240);
 fill(0);
 ball.move();
 ball.display();

}

class Ball{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.gravity = 9.81;
        this.velocity = 0;
        this.d = 30;
    }

    display(){
        ellipse(this.x,this.y,this.d,this.d);
    }

    move(){
        
        
        this.velocity += this.gravity * .1;
        this.y += this.velocity;
        

        if(this.y > height - this.d){
            this.velocity = 20;
            this.velocity = this.velocity * -1;
        }
    }
}




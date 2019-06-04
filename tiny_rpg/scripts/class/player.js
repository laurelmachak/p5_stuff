class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = 20;
        this.speed = 5;
        this.color = [38, 77, 0];
    }

    display(){
        noStroke();
        fill(this.color);
        rect(this.x, this.y, this.size, this.size);
    }

    move(){
        if (keyIsDown(RIGHT_ARROW)){
            this.x += this.speed;
        }

        if (keyIsDown(LEFT_ARROW)){
            this.x -= this.speed;
        }

        if (keyIsDown(DOWN_ARROW)){
            this.y += this.speed;
        }

        if (keyIsDown(UP_ARROW)){
            this.y -= this.speed;
        }

        if (this.x < 0){
            this.x = 0;
        }

        if (this.x > width - this.size){
            this.x = width - this.size;
        }

        if (this.y < 0){
            this.y = 0;
        }

        if (this.y > height - this.size){
            this.y = height - this.size;
        }
    }
}
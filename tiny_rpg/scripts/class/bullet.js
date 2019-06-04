class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 5;
    }

    display(){
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    move(px, py){
        
    }
}
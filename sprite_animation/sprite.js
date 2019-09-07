class Sprite{
    constructor(animation, speed){
        this.animation = animation;
        this.speed = speed;
        this.x = 0;
        this.y = 0;
        // this.w = w;
        // this.h = h;
        this.index = 0;
        this.len = this.animation.length;
    }

    show(){
        let index = floor(this.index) % this.len;
        image(this.animation[index],this.x,this.y);
    }

    animate(){
        this.index = (this.index + this.speed) % this.len;
    }
}
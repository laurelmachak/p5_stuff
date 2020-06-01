let particles = [];
let stroke_opacity = 20;
let amt;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("container");
    console.log(width);
    strokeWeight(.5);
    amt = int(width / 5);
    for (let i = 0; i < amt; i++) {
        particles.push(new Particle());
    }

}

function draw() {
    background(27, 35, 48);

    particles.forEach(function (particle) {

        for (let i = 0; i < particles.length; i++) {

            let d = int(dist(particle.x, particle.y, particles[i].x, particles[i].y));

            if (d < 100) {
                stroke_opacity = map(d, 0, 100, 250, 0);
                stroke(255, 255, 255, stroke_opacity);

                line(particle.x, particle.y, particles[i].x, particles[i].y);

            }
        }
        particle.display();
        particle.move();
    })

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    create_particles();

}

function create_particles() {
    particles = [];
    amt = int(width / 5);
    for (let i = 0; i < amt; i++) {
        particles.push(new Particle());
    }
}

class Particle {
    constructor() {
        this.x = random(10, width - 10);
        this.y = random(10, height - 10);
        this.radius = int(random(3, 9));
        this.color = [255, 237, 203];
        this.x_speed = random(-.5, .5);
        this.y_speed = random(-.5, .5);
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    move() {
        this.x += this.x_speed;
        this.y += this.y_speed;

        if (this.x > width) {
            this.x = 0;
        }

        if (this.x < 0) {
            this.x = width;
        }

        if (this.y > height) {
            this.y = 0;
        }

        if (this.y < 0) {
            this.y = height;
        }

    }
}

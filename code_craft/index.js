let grid;
let r;
let c;
let offset = 10;
let size = 35;
let player;
let test_inventory;
let bottom_grid_y;

let materials = {
    'dirt': {
        'color': [191, 128, 64],
        'name': 'dirt'
    },
    'grass': {
        'color': [121, 210, 121],
        'name': 'grass'
    },
    'stone': {
        'color': [204, 204, 204],
        'name': 'stone'
    },
    'water': {
        'color': [128, 229, 255],
        'name': 'water'
    },
    'brick': {
        'color': [255, 140, 102],
        'name': 'brick'
    }
}


// Prevent tiny scroll with arrow keys
window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("container");
    r = 20;
    c = 20;
    bottom_grid_y = r * size + offset;
    grid = new Grid(offset, offset, r, c);
    // grid.generate();
    player = new Player();
    test_inventory = new Inventory();
    console.log(test_inventory.items);

    frameRate(30);
    

}

function draw() {
    background(40);
    grid.show();
    player.move();
    player.display();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
    if (key=== ' '){
        // console.log(grid.cells[player.cell_y][player.cell_x].material.name);
        // test_inventory.add_item(grid.cells[player.cell_y][player.cell_x].material.name);
        if (player.current_cell.on){
            console.log(player.current_cell.material.name);
            test_inventory.add_item(player.current_cell.material.name);
            player.current_cell.on = false;
        }
        
        

    }
}



class Tile {
    constructor(x, y, size, material) {
        this.x = x;
        this.y = y;
        this.size = size;
        // this.material;
        this.material = material;
        this.on = true;
    }

    display() {
        if (this.on) {
            fill(this.material.color);
        } else {
            fill(0);
        }
        stroke(255);
        strokeWeight(1);
        rect(this.x, this.y, this.size, this.size);
    }

    mouse_on() {
        if (mouseX > this.x &&
            mouseX < this.x + this.size &&
            mouseY > this.y &&
            mouseY < this.y + this.size) {

            return true;
        } else {
            return false;
        }

    }

    toggle_on() {
        if (this.on) {
            this.on = false;
        } else {
            this.on = true;
        }
    }

}

class Grid {
    constructor(x, y, rows, cols) {
        this.x = x;
        this.y = y;
        this.rows = rows;
        this.cols = cols;
        this.cell_size = size;
        this.cells = [];
        this.material_choices = Object.keys(materials);
        this.generate();
    }

    generate() {
        for (let c = 0; c < this.cols; c++) {

            let y = (c * this.cell_size) + this.y;
            this.cells.push([]);

            for (let r = 0; r < this.rows; r++) {
                let material = Math.floor(Math.random() * this.material_choices.length);
                // console.log(materials[this.material_choices[material]]);
                let x = (r * this.cell_size) + this.x;
                this.cells[c].push(new Tile(x, y, this.cell_size, materials[this.material_choices[material]]));



            }

        }

    }

    show() {
        for (let c = 0; c < this.cols; c++) {

            for (let r = 0; r < this.rows; r++) {

                this.cells[c][r].display();
            }
        }

    }

}

class Player {
    constructor() {
        this.size = size;
        this.cell_x = 0;
        this.cell_y = 0;
        this.x;
        this.y;
        this.current_cell;
    }

    display() {
        fill(255,255,0,50);
        // noFill();
        stroke(153, 0, 255);
        strokeWeight(3);
        this.x = (this.cell_x * this.size) + offset;
        this.y = (this.cell_y * this.size) + offset;
        rect(this.x, this.y, this.size, this.size);
        this.current_cell = grid.cells[this.cell_y][this.cell_x];
    }

    move() {
        if (keyIsDown(RIGHT_ARROW)) {
            if (this.cell_x < r - 1) {
                this.cell_x += 1;
            }
        }

        if (keyIsDown(LEFT_ARROW)) {
            if (this.cell_x > 0) {
                this.cell_x -= 1;
            }
        }

        if (keyIsDown(DOWN_ARROW)) {
            if (this.cell_y < c - 1) {
                this.cell_y += 1;
            }
        }

        if (keyIsDown(UP_ARROW)) {
            if (this.cell_y > 0) {
                this.cell_y -= 1;
            }
        }

    }
}


class Inventory{
    constructor(){
        this.items = new Object();
        this.create_intentory();
    }

    create_intentory(){
        let material_keys = Object.keys(materials);

        for (let i=0; i<material_keys.length; i++){
            this.items[material_keys[i]] = 0;
        }
    }

    add_item(material){
        this.items[material] += 1;
        console.log(this.items);
    }
}
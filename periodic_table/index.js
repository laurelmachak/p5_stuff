
let element_data;
let periodic_table = [];
let x;
let y;
let symbol;
let cell_size = 50;
let category;
let fill_color;

let blue = [131, 165, 152];
let green = [184, 187, 38];
let purple = [211, 134, 155];
let aqua = [142, 192, 124];
let orange = [254, 128, 25];
let black = [40, 40, 40];

let categories = {
    'noble gas': green,
    'alkaline earth metal': [255, 153, 153],
    'metalloid': orange,
    'alkali metal': purple,
    'post-transition metal': [204, 153, 255],
    'polyatomic nonmetal': [204, 102, 153],
    'diatomic nonmetal': [153, 204, 255],
    'transition metal': blue,
    'lanthanide': [255, 204, 255],
}

function preload(){
    let element_file = './Periodic-Table-JSON/PeriodicTableJSON.json';
    element_data = loadJSON(element_file);
}


function setup(){
    canvas = createCanvas(1000,800);
    canvas.parent("container");
    textFont('Roboto Mono');
    textSize(cell_size/2);
    textAlign(CENTER,CENTER);
    console.log(element_data.elements[0].xpos);
    console.log(element_data.elements[118]);

    for (let i=0; i<element_data.elements.length; i++){

        x = element_data.elements[i].xpos * cell_size;
        y = element_data.elements[i].ypos * cell_size;
        symbol = element_data.elements[i].symbol;
        category = element_data.elements[i].category;

        if(category in categories){
            fill_color = categories[category];
        } else{
            fill_color = aqua;
        }

        periodic_table.push(new Cell(x, y,symbol, cell_size, fill_color));
    }

    console.log(periodic_table);
}

function draw(){
    background(black);
    for (let i=0; i<periodic_table.length; i++){

        periodic_table[i].display();
    }

}

class Cell{
    constructor(x,y,symbol,size, color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.symbol = symbol;
    }

    display(){
        stroke(this.color);
        fill(this.color);
        rect(this.x, this.y, this.size, this.size);
        fill(0);
        text(this.symbol, this.x + this.size/2, this.y + this.size/2);
    }
}




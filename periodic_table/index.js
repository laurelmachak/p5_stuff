
let element_data;
let periodic_table = [];
let info_box;
let x;
let y;
let symbol;
let cell_size = 50;
let category;
let fill_color;
let name;
let text_box_y = cell_size * 12;
let text_box_height = cell_size * 3;
let displayed_text = "click on a element!";

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
    

    for (let i=0; i<element_data.elements.length; i++){

        x = element_data.elements[i].xpos * cell_size;
        y = element_data.elements[i].ypos * cell_size;
        symbol = element_data.elements[i].symbol;
        category = element_data.elements[i].category;
        name = element_data.elements[i].name;

        if(category in categories){
            fill_color = categories[category];
        } else{
            fill_color = aqua;
        }

        periodic_table.push(new Cell(x, y, symbol,name, cell_size, fill_color));
    }

    info_box = new Info("testing 123!! HELLO!", cell_size, text_box_y, cell_size * 18, text_box_height);
}

function draw(){
    background(black);
    for (let i=0; i<periodic_table.length; i++){
        if (periodic_table[i].clicked()){
            displayed_text = periodic_table[i].name;
        }
        periodic_table[i].display();
    }
    info_box.words = displayed_text;
    info_box.display();
    // rect(cell_size, text_box_y, cell_size * 18, text_box_height);

}

class Cell{
    constructor(x,y,symbol,name,size, color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.symbol = symbol;
        this.name = name;
    }

    display(){
        stroke(this.color);
        fill(this.color);
        rect(this.x, this.y, this.size, this.size);
        fill(0);
        text(this.symbol, this.x + this.size/2, this.y + this.size/2);
    }

    clicked(){
        if (mouseIsPressed){
            if (mouseX > this.x && mouseX < this.x + this.size){
                if (mouseY > this.y && mouseY < this.y + this.size){
                    return true;
                }
            }
        }
    }
}

class Info{
    constructor(words,x,y, x_size, y_size){
        this.words = words;
        this.x = x;
        this.y = y;
        this.x_size = x_size;
        this.y_size = y_size;
    }

    display(){
        stroke(189, 174, 147);
        strokeWeight(3);
        fill(235, 219, 178);
        rect(this.x, this.y, this.x_size, this.y_size);
        fill(66, 123, 88);
        noStroke();
        text(this.words, this.x + this.x_size/2, this.y + this.y_size/2);
    }
}




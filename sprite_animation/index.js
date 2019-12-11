let spritesheet;
let walking_animation;
let dimensions = sprite_dimensions(832, 1344, 21, 13);
let coords = animation_coords(11, 1, 9, dimensions.w, dimensions.h);

let animation_cycles = [
    {
        'name' : 'walk_right',
        'direction' : 'right',
        'start_row' : 11,
        'rows' : 1,
        'row_len' : 9
    },
    {
        'name' : 'walk_left',
        'direction' : 'left',
        'start_row' : 9,
        'rows' : 1,
        'row_len' : 9
    }
];

// console.log(animation_cycles);

animation_cycles.forEach(function(cycle){
    cycle.coords_test = animation_coords(cycle.start_row, cycle.rows, cycle.row_len, dimensions.w, dimensions.h);
})

console.log(animation_cycles);

let character;



function preload() {
    spritesheet = loadImage('resources/character.png');
}

function setup() {
    canvas = createCanvas(800, 500);
    canvas.parent("container");

    walking_animation = create_animation(coords, dimensions.w, dimensions.h, spritesheet);
    character = new Sprite(walking_animation, .2);



}

function draw() {
    background(20);
    character.animate();
    character.show();

    if (keyIsDown(RIGHT_ARROW)){
        character.x = (character.x + 2) % width;
    }

    // BELOW TODO: fix so correct sprite tiles are pointing in correct direction

    if (keyIsDown(LEFT_ARROW)){
        character.x = (character.x - 2) % width;
    }

    if (keyIsDown(DOWN_ARROW)){
        character.y = (character.y + 2) % height;
    }

    if (keyIsDown(UP_ARROW)){
        character.y = (character.y - 2) % height;
    }

    

}




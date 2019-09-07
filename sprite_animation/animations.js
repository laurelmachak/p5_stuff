


function sprite_dimensions(sheet_w, sheet_h, rows, cols){
    let sprite_w = sheet_w/cols;
    let sprite_h = sheet_h/rows;
    return {'w' : sprite_w, 'h': sprite_h};
}

function animation_coords(start_row, rows, row_len, sprite_w, sprite_h){
    // make sure start_row starts at index 0 (e.g. first row --> 0)
    let coords = [];
    let y = start_row * sprite_h;
    for (let i=0; i<rows; i++){

        for (let p=0; p<row_len; p++){
            let x = p * sprite_w;
            coords.push({'x' : x, 'y': y});
        }

        y += sprite_h;
    }

    return coords;
}

function create_animation(coords, sprite_w, sprite_h, sheet){
    let animation = [];
    for (let i=0; i<coords.length; i++){
        let img = sheet.get(coords[i].x, coords[i].y, sprite_w, sprite_h);
        animation.push(img);
    }

    return animation;
}
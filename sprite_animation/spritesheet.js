class Spritesheet{
    constructor(sheet_w, sheet_h, rows, cols){
        this.sheet_w = sheet_w;
        this.sheet_h = sheet_h;
        this.rows = rows;
        this.cols = cols;

        this.sprite_w = this.sheet_w / cols;
        this.sprite_h = this.sheet_h / rows;

        this.cycle_info = [];
        this.animations = [];
        
    }

    add_cycle_info(state, direction, start_row, row_count, row_len){
        this.cycle_info.push({
            'state' : state,
            'direction' : direction,
            'start_row' : start_row,
            'row_count' : row_count,
            'row_len' : row_len
        })
    }


    create_animations(){
        
    }




}
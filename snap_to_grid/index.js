
let cell_size = 20;
let rows, cols;
let tiles = [];

let show_grid = true;
let toggle_grid_lines_btn = document.getElementById("toggle_grid_lines");

let cell_size_input = document.getElementById("cell_size_input");

let add_tile_btn = document.getElementById("add_tile_btn");

function setup(){
 canvas = createCanvas(800,500);
 canvas.parent("container");
 
 rows = floor(height/cell_size);
 cols = floor(width/cell_size);


 tiles.push(new Tile(0,0,cell_size*2,cell_size*2,[68, 102, 0],[102, 153, 0]));
 tiles.push(new Tile(80,80,80,80,[77, 0, 153],[140, 26, 255]));
}

function draw(){
 background(40);


 // draw grid
 if (show_grid){
   noFill();
   stroke(247, 255, 230);
   for (let i=0; i<rows; i++){
    for (let c=0; c<cols; c++){
     rect(c * cell_size, i * cell_size, cell_size, cell_size);
    }
   }
 }

// draw tiles
tiles.forEach(function(tile){
   tile.update_position();
   tile.display();
})
 
}

function mousePressed(){

tiles.forEach(function(tile){
   tile.drag();
})
}

function mouseReleased(){

tiles.forEach(function(tile){
   tile.end_drag();
})
}

toggle_grid_lines_btn.addEventListener("click", function(){
   show_grid = !show_grid;
})

cell_size_input.addEventListener("change", function(){

   cell_size = cell_size_input.value;

   rows = floor(height/cell_size);
   cols = floor(width/cell_size);

   tiles.forEach(function(tile){
      tile.cell_size = cell_size;
   })
})

add_tile_btn.addEventListener("click", function(){
   tiles.push(new Tile(0, 0, cell_size*2, cell_size*3, [0, 153, 153], [0, 204, 204]));
})



class Tile{
 constructor(x=0,y=0,w,h,c1,c2){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.offset_x = 0;
  this.offset_y = 0;
  this.dragging = false;
  this.c1 = c1; // resting color
  this.c2 = c2; // color while dragging
  this.color = this.c1;
  this.cell_size = cell_size;
  
 }
 
 display(){
  
  stroke(247, 255, 230);
  
  if (this.touching_mouse() && this.dragging){
   this.color = this.c2;
  } else{
   this.color = this.c1;
  }
  
  fill(this.color);
  rect(this.x, this.y, this.w, this.h);
 }
 
 touching_mouse(){
  if (
   mouseX > this.x &&
   mouseX < this.x + this.w &&
   mouseY > this.y &&
   mouseY < this.y + this.h){
      
      return true;
      } else{
       
       return false;
      }
 }
 
 drag(){
  if (this.touching_mouse()){
   this.dragging = true;
   this.offset_x = this.x - mouseX;
   this.offset_y = this.y - mouseY;
  
 
  }
 }
 
 update_position(){
  if (this.dragging){
   this.x = this.offset_x + mouseX;
   this.y = this.offset_y + mouseY;
  }
 }
 
 end_drag(){
  this.x = round(this.x/this.cell_size) * this.cell_size;
  this.y = round(this.y/this.cell_size) * this.cell_size;

  this.dragging = false;
 }
 
}






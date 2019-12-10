
let tile;
let tile2;
let cell_size = 20;

let rows, cols;

function setup(){
 canvas = createCanvas(800,500);
 canvas.parent("container");
 
 rows = floor(height/cell_size);
 cols = floor(width/cell_size);
 
 tile = new Tile(0,0,cell_size*2,cell_size*2,[68, 102, 0],[102, 153, 0]);
 tile2 = new Tile(80,80,80,80,[77, 0, 153],[140, 26, 255]);
}

function draw(){
 background(40);
 
 noFill();
 stroke(247, 255, 230);
 
 for (let i=0; i<rows; i++){
  for (let c=0; c<cols; c++){
   rect(c * cell_size, i * cell_size, cell_size, cell_size);
  }
 }
 
 tile.update_position();
 tile.display();
 
 tile2.update_position();
 tile2.display();
 
}

function mousePressed(){
 tile.drag();
 tile2.drag();
}

function mouseReleased(){
 tile.end_drag();
 tile2.end_drag();
}



class Tile{
 constructor(x,y,w,h,c1,c2){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.offset_x = 0;
  this.offset_y = 0;
  this.dragging = false;
  this.c1 = c1;
  this.c2 = c2;
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






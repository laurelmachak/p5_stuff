let stroke_color = [255, 0, 0];
let fill_color = [0,0,0];
let size = 15;
let trans_btn;
let filled = true;
let fill_col_btn;
let stroke_col_btn;
let shape;

let fill_col_label;
let stroke_col_label;

let tool_containers = document.getElementsByClassName('tool_container');

function setup(){
 canvas = createCanvas(800,500);
 canvas.parent("container");
 background(240);
 rectMode(CENTER);


 // first tool container
 trans_btn = createButton("Toggle Fill");
//  put into first tool_container
 trans_btn.parent(tool_containers[0]);
 trans_btn.mousePressed(toggle_fill);
 trans_btn.addClass('btn');
 trans_btn.addClass('btn-on');
 
 // second tool container
 fill_col_btn = createColorPicker();
 fill_col_btn.parent(tool_containers[1]);
 fill_col_btn.changed(choose_fill_color);
 fill_col_btn.addClass('btn');
 
 fill_col_label = createP("Fill Color:");
 fill_col_label.parent(tool_containers[1]);
 fill_col_label.addClass("label");
 
 // third tool_container
 stroke_col_btn = createColorPicker();
 stroke_col_btn.parent(tool_containers[2]);
 stroke_col_btn.changed(choose_stroke_color);
 stroke_col_btn.addClass('btn');
 
 stroke_col_label = createP("Stroke Color:");
 stroke_col_label.parent(tool_containers[2]);
 stroke_col_label.addClass("label");
 
 // 4th tool container
 shape = createRadio("shape");
 shape.parent(tool_containers[3]);
 shape.option("square", 'square');
 shape.option("circle", 'circle');
 shape.option("eraser", 'eraser');
 shape.addClass('tools');
 shape.value('square');
 
//  trans_btn.position(10,30);
//  fill_col_label.position(10, 65);
//  fill_col_btn.position(10,100);
//  stroke_col_label.position(10, 135);
//  stroke_col_btn.position(10, 170);
//  shape.position(10, 240);
 
 fill(fill_color);
}

function draw(){
 stroke(stroke_color);
 
 
 if (filled){
  fill(fill_color);
 } else {
  noFill();
 }
 

 
 
 if (mouseIsPressed){
  if (shape.value() === "square"){
   rect(mouseX, mouseY, size, size);
  } else if(shape.value() === "circle"){
   ellipse(mouseX, mouseY, size, size);
  } else if(shape.value() === "eraser"){
   fill(240);
   stroke(240);
   rect(mouseX, mouseY, size, size);
  }
  
 }
 
 if (keyIsPressed){
  
  if (keyCode === UP_ARROW){
   size += 5;
  }
  
  if (keyCode === DOWN_ARROW){
   if (size > 0){
    size -= 5;
   }
  }
  
  if (key === " "){
   background(240);
  }
  
 }
 
}


function toggle_fill(){
 if (filled){
  trans_btn.removeClass('btn-on').addClass('btn-off');
  filled = false;
 } else{
  trans_btn.removeClass('btn-off').addClass('btn-on');
  filled = true;
 }
}

function choose_fill_color(){
 fill_color = fill_col_btn.value();
}

function choose_stroke_color(){
 stroke_color = stroke_col_btn.value();
}



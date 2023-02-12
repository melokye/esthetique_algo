"use strict"
/*
1. Study at least one example of syntax from the p5.js reference site,
https://p5js.org/reference/. (Of course, it is always good to know more than one.
Be curious!)

2. Familiarize yourself with the reference structure: examples, descriptions, various
pieces of syntax and parameters (This knowledge will give you an essential, life-
long skill for learning new syntax on your own).

3. Use, read, modify (or even combine) the sample code that you find (the most
basic level is changing the numbers), and produce a new sketch as a RunMe.
*/

let option = 0;
let rayon = 60;
let variation = 1;
let color = 255;

function setup() {
    createCanvas(720, 400);
    // stroke(255);
}
  
function draw() {
    switch(option){
        case 0: classic()
        case 1:reflet(); break;
        case 2: battement(); break;
        case 3: new_color(); break;
        default : classic();
    }
}

function mousePressed(){
    option++;
    if(option > 3){
        option = 0;
    }
    background(0);
}

function battement(){
    reflet();
    rayon += variation;
    if(rayon < 30 || rayon > 60){
        variation *= -1;
    }
}

function reflet(){
    fill(0, 25);
    rect(0, 0, width, height);

    ball();
}

function classic(){
    background(0);
    ball();    
}

function ball(){
    fill(color);
    noStroke();
    ellipse(mouseX, mouseY, rayon, rayon);
}

function new_color(){
    color = random(255) + 100;
    classic();
}
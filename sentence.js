function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  
  //wanna
  printW(40,100)
  printA(140,100)
  printN(190,100)
  printN(270,100)
  printA(370,100)
  
  //be
  printB(40,250)
  printE(130,250)
  
  //rich
  printR(40,400)
  printI(130,400)
  printC(210,400)
  printH(290,400)
  
}
function printA(x, y) {
  fill(mouseX, mouseY, mouseX)
  stroke(mouseX, mouseY, mouseX)
  strokeWeight(20)
  line(x, y, x + 25, y + 100)
  line(x, y, x - 12.5, y + 45)

  noStroke()
  circle(x - 25, y + 100, 20)
}

function printB(x, y) {
  fill(mouseX, mouseY, mouseY)
  stroke(mouseX, mouseY, mouseY)
  strokeWeight(20)
  line(x, y, x, y + 100)

  noStroke()
  square(x + 15, y - 8, 55, 5, 30, 30, 5);
  square(x + 15, y + 52, 55, 5, 30, 30, 5);
  fill(0)
  circle(x + 38, y + 20, 20)
  circle(x + 38, y + 80, 20)

}

function printC(x, y) {
  fill(mouseY, mouseX, 0)
  stroke(mouseY, mouseX, 0)
  strokeWeight(20)
  line(x, y, x, y + 100)
  line(x, y, x + 50, y)

  noStroke()
  circle(x + 25, y + 100, 20)
  circle(x + 50, y + 100, 20)
}

function printD(x, y) {
  fill(mouseY, mouseX, mouseY)
  stroke(mouseY, mouseX, mouseY)
  strokeWeight(20)
  line(x, y, x, y + 100)
  rect(x + 25, y, 40, 100, 2, 50, 50, 2);

  stroke(0)
  strokeWeight(20)
  line(x + 38, y + 20, x + 38, y + 80)
}

function printE(x, y) {
  fill(0, mouseY, mouseX)
  stroke(0, mouseY, mouseX)
  strokeWeight(20)
  line(x, y, x, y + 100)
  line(x + 50, y, x + 65, y)
  line(x + 50, y + 100, x + 65, y + 100)
  line(x + 25, y + 50, x + 40, y + 50)

  noStroke()
  circle(x + 25, y, 20)
  circle(x + 25, y + 100, 20)
  circle(x + 63, y + 50, 20)
}

function printF(x, y) {
  fill(mouseY, mouseX, mouseX)
  stroke(mouseY, mouseX, mouseX)
  strokeWeight(20)
  line(x, y, x, y + 100)
  line(x, y, x + 50, y)

  noStroke()
  circle(x + 25, y + 50, 20)

}

function printG(x, y) {
  fill(0, mouseX, mouseX)
  stroke(0, mouseX, mouseX)
  strokeWeight(20)
  line(x, y, x + 50, y)
  line(x, y, x, y + 100)
  line(x + 25, y + 50, x + 50, y + 50)
  line(x + 50, y + 50, x + 50, y + 100)

  noStroke()
  circle(x + 25, y + 100, 20)


}

function printH(x, y) {
  fill(0, mouseX, mouseX)
  stroke(0, mouseX, mouseX)
  strokeWeight(20)
  line(x, y, x, y + 100)
  line(x + 50, y, x + 50, y + 75)
  line(x, y + 45, x + 50, y + 45)

  noStroke()
  circle(x + 50, y + 100, 20)
}

function printI(x, y) {
  fill(mouseX, mouseY, mouseX)
  stroke(mouseX, mouseY, mouseX)
  strokeWeight(20)
  line(x, y, x + 25, y)
  line(x + 25, y, x + 25, y + 100)
  line(x, y + 100, x + 50, y + 100)

  noStroke()
  circle(x + 50, y, 20)
}


function printJ(x, y) {
  fill(mouseX, mouseY, mouseY)
  stroke(mouseX, mouseY, mouseY)
  strokeWeight(20)
  line(x + 23, y, x + 50, y)
  line(x + 35, y, x + 35, y + 90)
  rect(x, y + 85, 35, 15, 2, 2, 70, 70);

  noStroke()
  circle(x, y, 20)
}



function printK(x, y) {
  fill(mouseY, mouseX, 0)
  stroke(mouseY, mouseX, 0)
  strokeWeight(20)
  line(x, y, x, y + 75)
  line(x + 50, y, x, y + 50)
  line(x, y + 40, x + 50, y + 100)

  noStroke()
  circle(x, y + 100, 20)
}

function printL(x, y) {
  fill(mouseY, mouseX, mouseY)
  stroke(mouseY, mouseX, mouseY)
  strokeWeight(20)
  line(x, y, x, y + 75)
  line(x + 25, y + 100, x + 60, y + 100)
  noStroke()
  circle(x, y + 100, 20)
}

function printM(x, y) {
  fill(0, mouseY, mouseX)
  stroke(0, mouseY, mouseX)
  strokeWeight(20)
  line(x, y, x, y + 75)
  line(x, y, x + 25, y + 50)
  //line(x + 50, y, x + 50, y + 75)
  line(x + 50, y, x + 25, y + 50)
  noStroke()
  circle(x, y + 100, 20)
  circle(x + 50, y + 100, 20)

}

function printN(x, y) {
  fill(mouseY, mouseX, mouseX)
  stroke(mouseY, mouseX, mouseX)
  strokeWeight(20)
  line(x, y, x, y + 100)

  line(x, y, x + 50, y + 100)

  noStroke()
  circle(x + 50, y, 20)
  
}
function printO(x, y) {
   fill(0, mouseY, mouseX)
  noStroke()
  rect(x-10, y-10, 70, 120, 20);
  fill( 0)
  stroke( 0)
  strokeWeight(20)
  line(x+25,y+25,x+25,y+55)
  noStroke()
  fill(0)
  circle(x+25,y+80,20)
} 
function printP(x,y){
fill(0, mouseX, mouseX)
  stroke(0, mouseX, mouseX)
  strokeWeight(20)
  line(x, y+45, x, y + 100)
  line(x+25,y,x+50,y)
  line(x+50,y,x+50,y+45)
  line(x+50,y+45,x,y+45)
  
  noStroke()
  circle(x,y,20)
}
function printQ(x,y){
fill(mouseX, mouseY, mouseX)
  stroke(mouseX, mouseY, mouseX)
  strokeWeight(20)
line(x,y,x,y+100)
line(x,y,x+50,y)
line(x+50,y,x+50,y+75)
line(x,y+100,x+25,y+100)
line(x+25,y+100,x+25,y+75)
line(x+25,y+75,x+50,y+75)
noStroke()
circle(x+50,y+100,20)}

function printR(x,y){
  fill(mouseX, mouseY, mouseY)
  stroke(mouseX, mouseY, mouseY)
  strokeWeight(20)
  line(x,y,x,y+100)
  
  noStroke()
  square(x + 15, y - 8, 60, 5, 30, 30, 5);
  circle(x+50,y+100,20)
  circle(x+35,y+78,20)
  
  fill(0)
  circle(x + 35, y + 22, 20)
}

function printS(x,y){
  fill(mouseY, mouseX, 0)
  stroke(mouseY, mouseX, 0)
  strokeWeight(20)
  line(x,y,x+50,y)
  line(x,y+50,x+50,y+50)
  line(x+50,y+50,x+50,y+100)
  line(x,y+100,x+50,y+100)
  noStroke()
  circle(x,y+25,20)
}
function printT(x,y){
  fill(mouseY, mouseX, mouseY)
  stroke(mouseY, mouseX, mouseY)
  strokeWeight(20)
line(x,y,x+25,y)
  line(x+25,y,x+25,y+100)
  noStroke()
  circle(x+50,y,20)
}
function printU(x,y){
  fill(0, mouseY, mouseX)
  stroke(0, mouseY, mouseX)
  strokeWeight(20)
line(x,y,x,y+100)
line(x,y+100,x+50,y+100)
  line(x+50,y+100,x+50,y+50)
  noStroke()
  circle(x+50,y,20)
}
function printV(x,y){
  fill(mouseY, mouseY, 0)
  stroke(mouseY, mouseY, 0)
  strokeWeight(20)
line(x,y,x+25,y+100)
  line(x+25,y+100,x+37.5,y+50)
  noStroke()
  circle(x+50,y,20)
}
function printW(x,y){
  fill(mouseX, mouseY, 0)
  stroke(mouseX, mouseY, 0)
  strokeWeight(20)
line(x,y,x,y+100)
  line(x,y+100,x+25,y+60)
  line(x+25,y+60,x+50,y+100)
  noStroke()
  circle(x+50,y,20)
}
function printX(x,y){
  fill(0, mouseX, mouseX)
  stroke(0, mouseX, mouseX)
  strokeWeight(20)
  line(x,y,x+50,y+100)
  line(x+25,y+50,x,y+100)
  noStroke()
  circle(x+50,y,20)
}
function printY(x,y){
  fill(mouseX, mouseY, mouseX)
  stroke(mouseX, mouseY, mouseX)
  strokeWeight(20)
 line(x,y,x+25,y+50)
  line(x+25,y+50,x+25,y+100)
  noStroke()
  circle(x+50,y,20)
}
function printZ(x,y){
  fill(mouseX, mouseY, mouseY)
  stroke(mouseX, mouseY, mouseY)
  strokeWeight(20)
 line(x,y,x+50,y)
  line(x+50,y,x,y+100)
  noStroke()
  circle(x+50,y+100,20)
}

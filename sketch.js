var canvas;
var character;
var clickImg;
let words = ["Howdy Stranger!", "Go away", "Are you still here?", "Doo doo doo"];

function preload(){
  smile = loadImage('kindpng_5901054.png');
}

function setup() {
  createCanvas(500, 500);
  strokeWeight(8);
//   myButton = new Clickable(); //Create button
//   myButton.locate(200, 50); //Position Button
//   myButton.onPress = function () {
//     //When myButton is pressed
//     this.color = "#AAAAFF"; //Change button color
//     alert("Yay!"); //Show an alert message
//   };
  
  character = new Clickable();
  character.image = smile;
  character.imageScale = 0.5;
  character.locate(150,150);
  character.resize(200,200);
  character.text = "";
  character.onHover = function () {
    this.color = "#FFDE00";
    this.noTint = false;
    this.tint = "#FF0000";
  }
  character.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  }
  character.onPress = function () {
    //When myButton is pressed
    character.image = smile;
    // character.imageScale = 1;
    character.locate(150,150);
    this.color = "#AAAAFF"; //Change button color
    if (character.onPress) {
      character.hide();
    textBox();
  wordRandom();
    }
    // alert("Howdy!"); //Show an alert message
    // image(smile, 0, 0);
    // smile.resize(300, 300);
  };
  
}

//trying to figure out how to make the text box appear and stay instead of only appearing for a second when the mouse is clicked

function draw() {
  background(220);
//   myButton.draw();
  character.draw();
  line(mouseX, mouseY, pmouseX, pmouseY);
  
}

function textBox() {
  let c = color("FFFFFF");
  fill(c);
  noStroke();
  rect(100, 370, 300, 100, 20);
}

function mousePressed() {
    textBox();
  wordRandom();

}

function wordRandom() {
  //random phrase generator
  let word = random(words);
  textSize(30);
  fill(0);
  textAlign(CENTER);
  text(word, 250, 400);
}

let mode = "title";
let mdr;
var character1;
var character2;
var character3;
var character4;
var character5;
var clickImg;

function preload() {
  smile = loadImage("kindpng_5901054.png");
  mdr = loadFont("MeteoraDemoRegular-nMEV.ttf");
}

function setup() {
  createCanvas(500, 500);

  //Character One
  character1 = new Clickable();
  character1.image = smile;
  character1.imageScale = 0.8;
  character1.locate(90, 100);
  character1.resize(100, 100);
  character1.text = "";
  character1.onHover = function () {
    this.color = "#FFDE00";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  character1.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };

  //Character Two
  character2 = new Clickable();
  character2.image = smile;
  character2.imageScale = 0.8;
  character2.locate(310, 100);
  character2.resize(100, 100);
  character2.text = "";
  character2.onHover = function () {
    this.color = "#3EAEFF";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  character2.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };

  //Character Three
  character3 = new Clickable();
  character3.image = smile;
  character3.imageScale = 0.8;
  character3.locate(30, 250);
  character3.resize(100, 100);
  character3.text = "";
  character3.onHover = function () {
    this.color = "#B566F1";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  character3.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };

  //Character Four
  character4 = new Clickable();
  character4.image = smile;
  character4.imageScale = 0.8;
  character4.locate(370, 250);
  character4.resize(100, 100);
  character4.text = "";
  character4.onHover = function () {
    this.color = "#98FAB9";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  character4.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };

  //Character Five
  character5 = new Clickable();
  character5.image = smile;
  character5.imageScale = 0.8;
  character5.locate(200, 370);
  character5.resize(100, 100);
  character5.text = "";
  character5.onHover = function () {
    this.color = "#FA6CC0";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  character5.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
}

function draw() {
  switch (mode) {
    case "title":
      titleScreen();
      break;
    case "main":
      mainStage();
      break;
    case "close":
      closeStage();
      break;
  }
}

//press to start and go to main screen
function keyPressed() {
  if (key === "s" || key === "S") {
    mode = "main";
  }
}

//press to go back to main screen in middle of character interaction
function keyPressed2() {
  if (key === "b" || key === "B") {
    mode = "main";
  }
}

function titleScreen() {
  background(255, 229, 168);
  strokeWeight(5);
  stroke(255);
  fill(0);
  textSize(35);
  textAlign(CENTER);
  textFont(mdr);
  text("How Are You          ?", width * 0.5, height * 0.33);
  fill(0);
  line(310, 182, 440, 182);
  fill(141, 162, 184);
  text("Feeling", width * 0.75, height * 0.33);
  fill(0);
  textSize(25);
  text('Press "s" to begin', width * 0.5, height * 0.66);
}

function mainStage() {
  background(255, 229, 168);
  strokeWeight(0);
  stroke(0);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text("Click on any of the characters!", width * 0.5, height * 0.1);
  character1.draw();
  character2.draw();
  character3.draw();
  character4.draw();
  character5.draw();
}

//close up interaction with selected character
function closeStage() {
  background(255, 229, 168);

  // if (character1.onPress) {
  //   character1.hide();
  //   character2.hide();
  //   character3.hide();
  //   character4.hide();
  //   character5.hide();
  // }
  // fill(255, 0, 0, 127);
  // rect(0, 50, 100, 20);
}

// function textBox() {
//   let c = color("FFFFFF");
//   fill(c);
//   noStroke();
//   rect(100, 370, 300, 100, 20);
// }

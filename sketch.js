let mode = "title";

//font
let mdr;

let song;
// characters/stages
var denial;
var anger;
var bargain;
var depression;
var acceptance;

var denialScreen = 0;
var angerScreen = 0;
var bargainScreen = 0;
var depressionScreen = 0;
var acceptanceScreen = 0;

function preload() {
  mask = loadImage("mask.png");
  deny = loadImage("denial.png");
  angry = loadImage("anger.png");
  bargaining = loadImage("bargain.png");
  depress = loadImage("depression.png");
  accept = loadImage("acceptance.png");
  
  mdr = loadFont("MeteoraDemoRegular-nMEV.ttf");
  
  song = loadSound('Goodbye_My_Dear_by_Steffen_Daum_(getmp3.pro).mp3');
}

function setup() {
  createCanvas(500, 500);
  
  //Character One
  denial = new Clickable();
  denial.locate(90, 100);
  denial.resize(100, 100);
  denial.text = "D e n i a l";
  denial.onHover = function () {
    this.color = "#FFDE00";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  denial.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  denial.onPress = function () {
    closeStage();
  };

  //Character Two
  anger = new Clickable();
  anger.locate(310, 100);
  anger.resize(100, 100);
  anger.text = "A n g e r";
  anger.onHover = function () {
    this.color = "#3EAEFF";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  anger.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  anger.onPress = function () {
    closeStage();
  };

  //Character Three
  bargain = new Clickable();
  bargain.locate(30, 250);
  bargain.resize(100, 100);
  bargain.text = "B a r g a i n";
  bargain.onHover = function () {
    this.color = "#B566F1";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  bargain.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  bargain.onPress = function () {
    closeStage();
  };

  //Character Four
  depression = new Clickable();
  depression.locate(370, 250);
  depression.resize(100, 100);
  depression.text = "D e p r e s s i o n";
  depression.onHover = function () {
    this.color = "#98FAB9";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  depression.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  depression.onPress = function () {
    closeStage();
  };

  //Character Five
  acceptance = new Clickable();
  acceptance.locate(200, 370);
  acceptance.resize(100, 100);
  acceptance.text = "A c c e p t a n c e";
  acceptance.onHover = function () {
    this.color = "#FA6CC0";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  acceptance.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  acceptance.onPress = function () {
    closeStage();
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
    song.loop();
    mode = "main";
  }
}

//press to go back to main screen in middle of character interaction
function keyPressed2() {
  if (key === "b" || key === "B") {
    mode = "main";
    denialScreen = 0;
    angerScreen = 0;
    bargainScreen = 0;
    depressionScreen = 0;
    acceptanceScreen = 0;
  }
}

function titleScreen() {
  background(255, 229, 168);
  image(mask, 0, 0);
  mask.resize(500, 500);
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

//main game screen
function mainStage() {
  background(255, 229, 168);
  strokeWeight(0);
  stroke(0);
  fill(0);
  textSize(25);
  textAlign(CENTER);
  text("Click on any of the characters!", width * 0.5, height * 0.1);
  denial.draw();
  anger.draw();
  bargain.draw();
  depression.draw();
  acceptance.draw();
}

//close up interaction with selected character
function closeStage() {
  background(255, 229, 168);
  //Character 1 close up
  if (denial.onPress) {
    mode = "close";
  }
  denialScreen = 1;
  if (denialScreen == 1) {
    keyPressed2();
    background(255, 229, 168);
    image(deny, -50, 0);
    deny.resize(600, 600);
    textBox();
    textSize(30);
    fill(0);
    textAlign(CENTER);
    text("word", 250, 400);
  }

  if (anger.onPress) {
    mode = "close";
  }
  angerScreen = 1;
  if (angerScreen == 1) {
    keyPressed2();
    background(255, 229, 168);
    image(angry, -50, 0);
    angry.resize(600, 600);
    textBox();
    textSize(30);
    fill(0);
    textAlign(CENTER);
    text("word", 250, 400);
  }

  if (bargain.onPress) {
    mode = "close";
  }
  bargainScreen = 1;
  if (bargainScreen == 1) {
    keyPressed2();
    background(255, 229, 168);
    image(bargaining, -50, 0);
    bargaining.resize(600, 600);
    textBox();
    textSize(30);
    fill(0);
    textAlign(CENTER);
    text("word", 250, 400);
  }

  if (depression.onPress) {
    mode = "close";
  }
  depressionScreen = 1;
  if (depressionScreen == 1) {
    keyPressed2();
    background(255, 229, 168);
    image(depress, -50, 0);
    depress.resize(600, 600);
    textBox();
    textSize(30);
    fill(0);
    textAlign(CENTER);
    text("word", 250, 400);
  }

  if (acceptance.onPress) {
    mode = "close";
  }
  acceptanceScreen = 1;
  if (acceptanceScreen == 1) {
    keyPressed2();
    text("Press 'b' to return", 100, 0);
    background(255, 229, 168);
    image(accept, -50, 0);
    accept.resize(600, 600);
    textBox();
    textSize(30);
    fill(0);
    textAlign(CENTER);
    text("word", 250, 400);
  }
}

function textBox() {
  fill(255, 0, 0, 127);
  rect(100, 370, 300, 100, 20);
}

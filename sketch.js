var monkey;
var back;
var counter = 0;
var rock;
var s;
var song;


function preload() {

  forest = loadImage("jungle.jpg");

  forest1 = loadImage("jungle.jpg");

  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  ston = loadImage("stone.png");
  stone = loadImage("stone.png");

  ban = loadImage("banana.png");
  ban1 = loadImage("banana.png");

  song = loadSound("venom.mp3");

  
  
}

function setup() {
  createCanvas(1440, 692);
  setInterval(timeIt, 500);


  back = createSprite(200, 440, 1460, 862);
  back.addImage("jungle", forest)

  back1 = createSprite(1200, 440, 1460, 862);
  back1.addImage("jungle", forest1)

  monkey = createSprite(75, 540, 20, 320)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.25;

  s = createSprite(740, 620, 1492, 5);
  s.shapeColor = "saddlebrown"


  rock = createSprite(random(1000, 1500), 580, 862, 500);
  rock.addImage("stone1", ston)
  rock.scale = 0.20;

  banana = createSprite(random(1000, 1400), 430, 862, 500);
  banana.addImage("banana", ban)
  banana.scale = 0.08;

  banana1 = createSprite(random(1700, 2500), 430, 862, 500);
  banana1.addImage("banana", ban1)
  banana1.scale = 0.08;

  rock1 = createSprite(random(2000, 2300), 580, 862, 500);
  rock1.addImage("stone", stone)
  rock1.scale = 0.20;

    song.play();



}

function draw() {
  background(139, 69, 19);




  if ((rock1.x <= 0) || (rock1.x <= 0)) {
    rock.x = random(1000, 1500);
    rock1.x = random(2000, 2300);
  }


  if (banana.x <= 0) {
    banana.x = random(1000, 1500);
  }



  if (banana1.x <= 0) {
    banana1.x = random(1700, 2500);
  }

  if (monkey.isTouching(banana)) {
    banana.x = random(1000, 1500);
    counter = counter + 10;
  }

  if (monkey.isTouching(banana1)) {
    banana1.x = random(1700, 2500);
    counter = counter + 10;
  }
  if (monkey.isTouching(rock)) {
    reset();
  }


  if (keyDown("space") && monkey.y >= 400) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8


  //monkey.velocityY = 5
  rock.velocityX = -7
  rock1.velocityX = -7
  banana.velocityX = -12
  banana1.velocityX = -12
  //rock.velocityY=5


  monkey.collide(s);
  //rock.collide(s)



  drawSprites();
  textSize(25);
  fill("red")
  text("Score = " + counter, 1200, 120)

}


function timeIt() {
  counter++;
}

function reset() {
  counter = counter * 1 / 4
  rock.x = random(1000, 1500);
  rock1.x = random(2000, 2300);
  banana.x = random(1000, 1500);
  banana1.x = random(1700, 2500);


}
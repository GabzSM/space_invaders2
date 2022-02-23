var nave;
var limite;
var parede1;
var parede2;
var tiro;
var inimigos;


function preload() {
  naveImage = loadImage("naveverde.png");
  inimigoImage = loadImage("inimigo.png");
  tiroImage = loadImage("tiro.png");
  inimigoAnimacao = loadAnimation("inimigo","inimigo2.png")
}

function setup() {
  createCanvas(400,400);
  nave = createSprite (200,330,40,50);
  nave.addImage(naveImage);
  nave.scale = 0.12
  parede1 = createSprite(400, 200, 1, 400)
  parede2 = createSprite(1, 200, 1, 400)
  parede1.visible = false
  parede2.visible = false
  inimigos = createGroup();
  tiros = createGroup();
  limite = createEdgeSprites;
  criarinimigos(65);
  criarinimigos(65+40);
  criarinimigos(65+40+40);
}

function draw() {
  background("black");
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)) {
    nave.position.x = nave.position.x + 8;
  }
  if(keyIsDown(LEFT_ARROW)) {
    nave.position.x = nave.position.x - 8;
  }
  if (keyDown("space")) { 
    atirar(); 
  }

  console.log(nave.y);
  nave.collide(parede1)
  nave.collide(parede2)

}

function atirar() {
  if(frameCount % 14 === 0) {
tiro = createSprite(nave.x, nave.y - 7, 5, 18)
tiros.add(tiro);
tiro.velocityY = -15
tiro.addImage(tiroImage)
tiro.scale = 0.055

}
}
function criarinimigos(y, l) {
  for(c=1; c<7; c++){
    var inimigo = createSprite(60*c, y, 40, 30)
    inimigo.addAnimation(inimigoAnimacao)
    inimigo.addImage(inimigoImage)
    inimigo.scale = 0.15
    inimigos.add(inimigo)
    if (tiros.isTouching(inimigo)){
      inimigohit();
  
    }
  }
  
}
function inimigohit() {
  inimigo.destroy();
}



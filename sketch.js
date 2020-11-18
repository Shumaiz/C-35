var database;
var canvas,backgroundImg,playerCount;
var gameState = 0;
var form,player,game;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game()
    game.gameState(
        game.start()
    )
}

function draw(){
    background("white");
   
    drawSprites();
}


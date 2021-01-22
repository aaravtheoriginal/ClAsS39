var db,playerCount,gameState=0
var form,player,game,allPlayers
var car1,car2,cars,car1Image,car2Image
function preload() {
track=loadImage("images/track.jpg")    
car1Image =loadImage("images/car1.png")
car2Image =loadImage("images/car2.png")
}
function setup(){
    createCanvas(displayWidth,displayHeight)
   
    db=firebase.database()
   game=new Game()
   game.getState()
   game.start()

}

function draw(){
    if(playerCount===2){
        game.update(1)

         }
         if(gameState===1){
             clear()
             game.play()
         }

}



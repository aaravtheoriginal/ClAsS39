class Game{
    constructor(){

    }
    getState(){
        db.ref("gameState").on("value",function(data){
        gameState=data.val()
         })   
    }
    update(state){
        db.ref('/').update({
            gameState:state

        })
    }

start(){
   if (gameState===0){
       player=new Player()
       player.getCount()
       form=new Form()
       form.display()
   } 
   car1=createSprite(100,200)
   car1.addImage(car1Image)
   car2=createSprite(300,200)
   car2.addImage(car2Image)
   cars=[car1,car2]
}

play (){
    form.hide()
    Player.getPlayerInfo()
    if(allPlayers!==undefined){
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
         var index=0
         var x=175,y;
         for (var plr in allPlayers){
             index=index+1
             x=x+200
             y=displayHeight-allPlayers[plr].distance 
             cars[index-1].x=x
             cars[index-1].y=y
             if(index===player.index){
                fill ("red")
                circle(x,y,60)
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y
             }
         }
    }
    if(keyIsDown(UP_ARROW)&& player.index !== null ){
        player.distance=player.distance+10
        player.update()
    }

    drawSprites()
}

}


class Game{
    constructor(){

    }
    getState(){
database.ref('gameState').on("value",function(data){
    gameState=data.val()
    console.log(gameState)
})
    }
    updateState(state){
database.ref('/').update({
    gameState:state
})
    }
    start(){
        console.log("inside the start")
        if(gameState== 0 ){
            console.log("inside the if")
           player=new Player()
           player.getCount()
           console.log(playerCount)
           form=new Form()
           form.display()
        }
    }
    play(){
        form.hide()
        textSize(30);
     text("Game Start", 120, 100)
Player.getPlayerinfo()
if(allPlayers!==undefined){
    var display_position = 130;
    for(var plr in allPlayers){
        if (plr === "player" + player.index)
        fill("red")
        else
        fill("black");
        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
}
}
if(keyIsDown(UP_ARROW) && player.index !== null){ 
    player.distance +=50
    player.update();
    }
}
}
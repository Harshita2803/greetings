class Player {
    constructor (){
        this.distance = 0;
        this.name = null;
        this.index = null;
        
    }
   
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function (data){
           playerCount = data.val();
           console.log("playerCount is "+ playerCount);
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    updateName(){
        var playerName = "players/player"+this.index;
        database.ref(playerName).update({
            name : this.name,
            distance : this.distance
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('player');
        playerInfoRef.on("value", function (data){
            allPlayers = data.val();
        })
    }

}


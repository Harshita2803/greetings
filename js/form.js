class Form {
    constructor (){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);

         
        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(function (){
            console.log("mouse pressed")
            //this.input.hide();
            //this.button.hide();
            player.name = this.input.value();
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(130,160);

            playerCount++;
            player.index = playerCount
            player.updateName(player.name);
            player.updateCount(playerCount);
        })
    }
}
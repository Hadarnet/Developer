class player {
    constructor (title, sorce) {
    this.name = title;
    this.sorce = 0;

    }
   }

   let user1 = new player ("Netanel",)
   let user2 = new player ("Robby", )

   function generateRnNumber(player){
    randomNumber = Math.floor((Math.random()*10)+1);
        if (randomNumber%2 == 0){
           player.sorce ++;

           console.log("you Win");

        }
            
    }

   function(generateRnNumber)
    for (let i = 0; i < 3; i++) {
        console.log(generateRnNumber(player))    
    }

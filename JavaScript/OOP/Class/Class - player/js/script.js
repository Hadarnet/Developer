class player {
    constructor(name) {
    this.name = name;
    this.score = 0;
    }
  
    didwin(){return this.score > 30} 


    checkIfPlayerWon(){
            console.log(`player ${this.name} ${this.didwin() ? "won" : "lose"}`);
            
        }
    }





let Netanel = new player("Netanel");
Netanel.score = 32;
Netanel.checkIfPlayerWon();


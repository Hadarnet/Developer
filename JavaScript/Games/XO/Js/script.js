
class Game{
    constructor(){
        this.Borad = new Borad();
        this.tic = "x";
        this.tac = "o";
        this.currentTurn = this.tic;
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;

    }
    initListeners(){
for (let i = 0; j < this.Borad.cells.length; i++) {
    for (let j = 0; j < this.Borad.cells.length; j++){
        this.Borad.cells[i][j].click((e) => {this.onBoardClick(e)})
    }
  }
 }

    iniApp(){

    }
    
    onBoardClick(e){
        console.log(e.target.is(':empty'))

        }
    
    }
    
    


}


    class Borad{
    constructor(){
//         this.cells = [];
//         this.cells.push([]);
// this.cells[0][0] = $('.row:nth-child(1) .cell:nth-child(1)');
// this.cells[0][1] = $('.row:nth-child(1) .cell:nth-child(1)');
// this.cells[0][2] = $('.row:nth-child(1) .cell:nth-child(1)');
// this.cells.push([]);
// this.cells[1][0] = $('.row:nth-child(2) .cell:nth-child(2)');
// this.cells[1][1] = $('.row:nth-child(2) .cell:nth-child(2)');
// this.cells[1][2] = $('.row:nth-child(2) .cell:nth-child(2)');
// this.cells.push([]);
// this.cells[2][0] = $('.row:nth-child(3) .cell:nth-child(3)');
// this.cells[2][1] = $('.row:nth-child(3) .cell:nth-child(3)');
// this.cells[2][2] = $('.row:nth-child(3) .cell:nth-child(3)');

this.cells.push($(".row"));
for (let i = 0; i < 3; i++) {
    this.cells[i] = $(`.row:nth-child(${i+1}) .cell`);
    }
}



checKolumns(){
    
}

checkdiagonal(){

}

}


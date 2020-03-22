class MemoryGame {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }


    start() {

    }

    reset() {
        let checkedArrayId = [];
        let checkedArrayImg = [];

        let counter = 0;
        for (let i = 0; i < (this.row * this.col) / 2; i++) {
            checkedArrayImg.push(0);
        }
        for (let i = 0; i < this.row * this.col; i++) {
            checkedArrayId.push(0);
        }

        for (let i = 0; i < this.row; i++) {
            var row = document.createElement('div');
            row.setAttribute('class', 'row');
            document.querySelector('#cards').appendChild(row);
            for (let j = 0; j < this.col; j++) {
                counter++;
                var card = document.createElement('div');
                card.setAttribute('class', 'card');
                card.setAttribute('id', `${counter}`);
                row.appendChild(card);
                // document.getElementById(`${counter}`).style.backgroundImage = `url('./img/${counter}.png')`;
            }
        }

        while (checkedArrayId.includes(0)) {
            let randPic = Math.floor(Math.random() * 15) + 1; //random number between 1 to 15
            let randId = Math.floor(Math.random() * 30) + 1; //random number between 1 to 30
            if (checkedArrayImg[randPic - 1] < 2) {
                if (checkedArrayId[randId - 1] != 1) {
                    document.getElementById(`${randId}`).style.backgroundImage = `url('./img/${randPic}.png')`;
                    checkedArrayId[randId - 1] = 1;
                    checkedArrayImg[randPic - 1]++;

                }
            }

        }

        let listenerArray = document.querySelectorAll(".card");
        for (const card of listenerArray) {
            card.addEventListener('click', addE);
        }

        function addE(e) {
            e.target.style.backgroundSize = "95px";
        }

    }








}

const memoryGame = new MemoryGame(5, 6);
memoryGame.reset();




// for (let i = 0; i < 15; i++) {
//     let randPic = Math.floor(Math.random() * 15) + 1; //random number between 1 to 15
//     let randId = Math.floor(Math.random() * 30) + 1; //random number between 1 to 15
//     if (checkedArrayId[randId - 1] != 1) {
//         document.getElementById(`${randId}`).style.backgroundImage = `url('./img/${randPic}.png')`;
//         // document.getElementById(`${randId}`).style.backgroundImage = `url('./img/${randPic}.png')`;
//         checkedArrayId[randId - 1]++;
//     }
//     console.log(checkedArrayId);
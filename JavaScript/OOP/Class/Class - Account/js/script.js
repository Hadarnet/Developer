
class account  {
  constructor(sum) { this.sum = sum; }

  deposit(value) { this.sum += value; }
  withdraw(value) { this.sum -= value; }
  canWithdraw(value) { return (this.sum - value >= 0); }
  

  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let lottery = (account) => {
    if (!account.canWithdraw(100)) {
        console.log("You can't withdraw 100 dollars");
        return;
    }
    let rndNum=Math.floor(Math.random() * 100) + 1
    console.log(`Random number: ${rndNum}`);
    let rnd = getRandomInt(2);
    console.log(rnd == 1 ? "You Win" : "You Lose");
    if (rnd === 0){
        if(account.canWithdraw(rndNum)){account.withdraw(rndNum)}
        else{account.sum=0;}
    } 
    else {
        account.deposit(30);
    }
    console.log(`After lottery:${account.sum}`);
    
}

let newAcc = new Account(150);
for (let index = 0; index < 5; index++) {
    lottery(newAcc);
}
console.log(`Final sum: ${newAcc.sum}`);


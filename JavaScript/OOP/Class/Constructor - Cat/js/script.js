class Drink {
    constructor (title, isHot) {
    this.title = title;
    this.isHot = isHot;

    }

}
class Coffee extends Drink {
    constructor (title = 'coffee', numberOfCoffee = 0, milkOrNot = false, isHot = true) {
    super(title, isHot);
    this.numberOfCoffee = numberOfCoffee;
    this.milkOrNot = milkOrNot;


    
    }
    PrintInstructions () {
        console.log(`To make an ${this.title} add ${this.numberOfCoffee} coffee shots and ${this.milkOrNot ? "add milk" : "don`t add milk"}.
        ${this.isHot ? "be creful it is hot." : "It is not hot"}.`);

   }
}
   let espresso = new Coffee ('espresso', 1, true, false);
   espresso.PrintInstructions();
   let Cappuccino = new Coffee ('Cappuccino', 2, false, true);
   Cappuccino.PrintInstructions();


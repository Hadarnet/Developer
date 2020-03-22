class Dog {
    constructor (name, type, age, Cuddle) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.Cuddle = Cuddle;

    }
   }
   let Dog1 = new Dog("Bella", "Dogo Argentino", "5" ,"love");
   let Dog2 = new Dog("Bony", "Pit Bull", "7", "not love");
   let Dog3 = new Dog("Johnny", "Dobermann", "4", "love");


   function produceMessage(){
    let msg = "The Name Of Dog Is: " + Dog1.name + " Is Type: " + Dog1.type + " Is age: " + Dog1.age + " Years " + " And is" + Dog1.Cuddle + " Cuddle" ;
    let msg1 = "The Name Of Dog Is: " + Dog2.name + " Is Type: " + Dog2.type + " Is age: " + Dog2.age + " Years " + " And is" + Dog2.Cuddle + " Cuddle" ;
    let msg2 = "The Name Of Dog Is: " + Dog3.name + " Is Type: " + Dog3.type + " Is age: " + Dog3.age + " Years " + " And is" + Dog3.Cuddle + " Cuddle" ;

    return [msg,msg1,msg2];


   }
document.body.appendChild(document.createTextNode(produceMessage()));


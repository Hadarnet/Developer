class Animal {
    constructor (name, type) {
    this.name = name;
    this.type = type;

    }
   }

   class Cat extends Animal {
    constructor (name, isFrindly) {
    super(name, "cat")
    this.isFrindly = isFrindly;

    }
   

   frindly () {
    console.log(`I am ${this.name}  and I ${this.isFrindly} a friendly cat`);
    }
   }


class Animal {
    constructor(name, type) {
    this.name = name;
    this.type = type;
    }
   }
   let blacky = new Animal("blacky", "dog");
   blacky.age = 4;
   let bella = new Animal("bella", "dog");

   for(let prop in blacky){
    console.log("property: " + prop + ", value: " + blacky[prop]);
   }
      
class shoes {
    constructor(name, available_sizes)  {
        this.name = name;
        this.available_sizes = available_sizes;
}
  
    IsAvailable(size){
        let array= [];
        array = this.available_sizes.filter((index)=> index === size)
        return(array.length > 0);
    }

}
let newShoes = new Shoes("Adidas" , [36,39,38]);
console.log(newShoes.IsAvailable(36));
console.log(newShoes.IsAvailable(40));






let Adidas = new shoes("Star Shoes");
Adidas.availableSize = 36,38,44;
Adidas.checkIfHaveMySize();


class Jewel {

    constructor (Type, price){
        this.Type = Type;
        this.price = price;

    }
}

let ring = new Jewel("ring", 200);
let bracelet = new Jewel("bracelet", 300);
getHigherPrice = (ring, bracelet) =>{
if (ring > bracelet) {
    console.log(ring.price);
    
} else {
    console.log(bracelet.price);
    }
};

getHigherPrice(ring, bracelet);

class greenHouse {
    constructor(season, color, blossom) {
    this.name = name;
    this.season = season;
    this.color = color;
    this.blossom = blossom;
    }
  }
    const Roz = new greenHouse("summer", "blue", true);
    const Wasa = new greenHouse("Spring", "red", true);
    const Was = new greenHouse("summer", "black", false);
    const Rozf = new greenHouse("winter", "pink", false);
    let flower = [Roz, Wasa , Was, Rozf]
    function checkIfBlossom(array){
      return array.filter( flower => {
        return flower.blossom == true

    })
}
const x = checkIfBlossom(flower)
console.log(x);
